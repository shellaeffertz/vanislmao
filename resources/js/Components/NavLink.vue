<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

</script>

<template>

    <Link
        :href="href"
        class="px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg relative group"
    >
        <slot />
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>

</template>
