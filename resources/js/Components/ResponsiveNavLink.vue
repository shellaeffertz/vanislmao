<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    active: Boolean,
    href: String,
    as: String,
});

</script>

<template>
    <div>
        <button v-if="as == 'button'" class="w-full text-left">
            <slot />
        </button>

        <Link
            v-else
            :href="href"
            class="block px-3 py-2 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-150"
        >
            <slot />
        </Link>
    </div>
</template>
