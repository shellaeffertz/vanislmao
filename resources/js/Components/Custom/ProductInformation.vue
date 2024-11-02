<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const imageLoaded = ref(false);
const pageLoaded = ref(false);
const elementStates = ref({
    breadcrumb: false,
    image: false,
    title: false,
    price: false,
    description: false,
    buyButton: false,
    details: false
});

onMounted(() => {
    const img = new Image();
    img.src = `http://localhost:8000/storage/${props.product.image_url}`;
    img.onload = () => {
        imageLoaded.value = true;

        // Reduced and tightened animation delays
        setTimeout(() => { elementStates.value.breadcrumb = true; }, 50);
        setTimeout(() => { elementStates.value.image = true; }, 100);
        setTimeout(() => { elementStates.value.title = true; }, 150);
        setTimeout(() => { elementStates.value.price = true; }, 200);
        setTimeout(() => { elementStates.value.description = true; }, 250);
        setTimeout(() => { elementStates.value.buyButton = true; }, 300);
        setTimeout(() => {
            elementStates.value.details = true;
            pageLoaded.value = true;
        }, 350);
    };
});
</script>

<template>
    <div
        class="max-w-7xl mx-auto px-6 my-8 transition-all duration-700 ease-out"
        :class="[
            {'mt-16': !$page.props.auth.user, 'mt-4': $page.props.auth.user},
            pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
    >
        <div
            class="flex items-center gap-2 mb-6 transition-all duration-700 ease-out transform"
            :class="elementStates.breadcrumb
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'"
        >
            <span class="text-sm text-gray-500">Belongs to</span>
            <Link
                :href="route('collection', product.collection.id)"
                class="group relative inline-flex items-center gap-2 font-medium text-blue-600"
            >
                <i class="fa-solid fa-folder-open text-blue-500"></i>
                <span>{{ product.collection.title }}</span>
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
        </div>

        <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-out"
            :class="pageLoaded
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div
                    class="relative group transition-all duration-700 ease-out transform"
                    :class="elementStates.image
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-10'"
                >
                    <div v-if="!imageLoaded" class="absolute inset-0 bg-gray-100 animate-pulse rounded-lg"></div>

                    <div class="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                        <img
                            :src="`http://localhost:8000/storage/${product.image_url}`"
                            :class="{'opacity-0': !imageLoaded, 'opacity-100': imageLoaded}"
                            class="w-full h-full object-contain object-center transition-all duration-700 transform group-hover:scale-105"
                            alt="product image"
                        >

                        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
                        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium text-blue-600">
                            <i class="fa-solid fa-box mr-2"></i>{{ product.stock }} in stock
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-between">
                    <div class="space-y-6">
                        <h1
                            class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight transition-all duration-700 ease-out transform"
                            :class="elementStates.title
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-10'"
                        >
                            {{ product.title }}
                        </h1>

                        <div
                            class="inline-flex items-baseline bg-blue-50 rounded-full px-4 py-2 transition-all duration-700 ease-out transform"
                            :class="elementStates.price
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'"
                        >
                            <span class="text-2xl font-bold text-blue-600">{{ product.price }}</span>
                            <sup class="text-blue-600 font-medium">$</sup>
                            <span class="ml-2 text-sm text-blue-600/70">per item</span>
                        </div>

                        <div
                            class="prose prose-blue max-w-none transition-all duration-700 ease-out transform"
                            :class="elementStates.description
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'"
                        >
                            <p class="text-gray-600 leading-relaxed">
                                {{ product.description }}
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex gap-4 mt-8 transition-all duration-700 ease-out transform"
                        :class="elementStates.buyButton
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'"
                    >
                        <button class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium
                                     transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25
                                     active:scale-95 group relative overflow-hidden">
                            <span class="relative z-10">Buy Now</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600
                                      transform translate-y-full transition-transform duration-300
                                      group-hover:translate-y-0"></div>
                        </button>
                    </div>
                </div>
            </div>

            <div
                class="border-t border-gray-100 bg-gray-50/50 transition-all duration-700 ease-out transform"
                :class="elementStates.details
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'"
            >
                <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                    <div class="p-4 text-center">
                        <div class="text-sm text-gray-500">Category</div>
                        <div class="font-medium text-gray-900">{{ product.collection.title }}</div>
                    </div>
                    <div class="p-4 text-center">
                        <div class="text-sm text-gray-500">Stock Status</div>
                        <div class="font-medium text-gray-900">
                            <span class="inline-flex items-center">
                                <span class="w-2 h-2 rounded-full mr-2"
                                      :class="product.stock > 0 ? 'bg-green-500' : 'bg-red-500'"></span>
                                {{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}
                            </span>
                        </div>
                    </div>
                    <div class="p-4 text-center">
                        <div class="text-sm text-gray-500">Shipping</div>
                        <div class="font-medium text-gray-900">Free</div>
                    </div>
                    <div class="p-4 text-center">
                        <div class="text-sm text-gray-500">
                            Reviews
                        </div>
                        <div class="font-medium text-gray-900 space-x-1">
                            <i class="fa-solid fa-star text-yellow-500"></i>
                            <span>4.5/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    transition: opacity 0.5s ease-in-out;
}

button {
    transition: all 0.3s ease;
}
</style>
