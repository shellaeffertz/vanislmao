<script setup>

import { Link } from '@inertiajs/vue3';

defineProps({
    active: Boolean,
});

</script>

<template>

    <Link  
        class="w-full px-3 py-2 text-blue-900 capitalize group flex items-center gap-3 transition-colors relative"
        :class="{'bg-blue-900 text-white': active, 'hover:bg-gray-100 text-gray-600' : !active}"
    >

        <i class="fa-solid fa-folder text-gray-400"></i>

        <slot />

        <div v-if="!active" class="absolute inset-0 left-0 w-1 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
    </Link>
    
</template>
