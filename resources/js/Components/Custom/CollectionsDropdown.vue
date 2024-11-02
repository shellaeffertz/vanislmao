<script setup>
import { ref } from 'vue';
import CollectionLink from './CollectionLink.vue';

let emits = defineEmits(['showAddCollectionModal']);

defineProps({
    collections: {
        type: Array,
        required: true
    },
    currentCollection: {
        required: true,
        default: 'All'
    }
});

let show = ref(false);

const showModal = () => {
    emits('showAddCollectionModal');
    show.value = false;
}
</script>

<template>

    <div v-show="show" 
         @click="show = false" 
         class="fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-200 z-40"
         :class="show ? 'opacity-100' : 'opacity-0'">
    </div>

    <div class="relative max-w-7xl mx-auto px-6 mt-16">

        <button @click="show = true" 
                class="group relative w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="flex items-center justify-between">

                <div class="flex items-center gap-3">
                    <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <span class="text-lg font-medium text-gray-700">{{ currentCollection }}</span>
                </div>

                <i class="fa-solid fa-chevron-right transform transition-transform duration-300"
                   :class="{'rotate-90': show, 'rotate-0': !show}"></i>
            </div>
            

            <div class="absolute bottom-0 left-0 right-0 h-1 rounded-full overflow-hidden">
                <div class="w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 
                            transform transition-transform duration-700"
                     :class="{'translate-x-0': show , '-translate-x-full': !show}">
                </div>
            </div>
        </button>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-4"
        >
            <div v-show="show" 
                 class="absolute w-full bg-white mt-4 rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <div class="max-h-[60vh] overflow-y-auto">

                    <CollectionLink @click="show = false" 
                                  href="/" 
                                  :active="currentCollection == 'All'"
                    >
                        <span>
                            All
                        </span>
                    </CollectionLink>

                    <CollectionLink v-for="collection in collections" 
                                :key="collection.id"
                                @click="show = false"
                                :href="route('collection', collection.id)"
                                :active="currentCollection == collection.title"
                    >
                        <span>
                            {{ collection.title }}
                        </span>
                    </CollectionLink>

                    <button v-if="$page.props.auth.user" 
                            @click="showModal" 
                            class="group w-full flex items-center gap-3 p-3 text-blue-600 hover:bg-blue-50/50 border-t border-gray-100 transition-colors">
                        <i class="fa-solid fa-plus"></i>
                        <span class="font-medium">Add New Collection</span>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #94a3b8 transparent;
}

.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background-color: #94a3b8;
    border-radius: 3px;
}
</style>