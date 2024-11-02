<script setup>

import { Link } from '@inertiajs/vue3';

defineProps({
    collection: {
        type: Object,
        required: true
    }
});

</script>

<template>

    <div class="relative flex flex-col items-center text-center max-w-4xl mx-auto py-8">

        <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transform -skew-y-2 opacity-60"></div>

        <div class="relative flex items-center justify-center w-full mb-6">
            <div class="w-16 h-1 bg-blue-600 rounded-full transform transition-transform duration-500 hover:scale-x-150"></div>
            <div class="w-8 h-1 bg-indigo-400 rounded-full ml-2 transform transition-transform duration-500 hover:scale-x-150"></div>
        </div>

        <div class="relative space-y-4 animate-fadeIn">

            <h1 class="group relative inline-block">
                <Link
                    class="text-4xl font-black text-gray-900 tracking-tight transition-all duration-300 hover:text-blue-700"
                    :href="route('collection', collection.id)"
                >
                    {{ collection.title }}

                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                <span class="absolute -right-7 -top-7 w-8 h-8 bg-blue-100 rounded-full transform scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
            </h1>

            <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn animation-delay-200">
                {{ collection.description }}
            </p>
        </div>

    </div>

</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
}

.animation-delay-200 {
    animation-delay: 200ms;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

h1:hover {
    animation: float 3s ease-in-out infinite;
}
</style>
