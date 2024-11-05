<script setup>

import { Link } from '@inertiajs/vue3';

defineProps({
    product: {
        type: Object,
        required: true
    }
});

</script>

<template>

    <div class="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div class="relative m-0.5 bg-white rounded-xl overflow-hidden">

            <div class="relative w-full h-52 overflow-hidden bg-gray-50">
                <img
                    class="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-110"
                    :src="`https://vanislmao.com/storage/${product.image_url}`"
                    alt="product image"
                >
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
            </div>

            <div class="p-4 space-y-4">

                <Link
                    :href="route('product', product.id)"
                    class="block relative group/title"
                >
                    <p class="font-bold text-sm text-gray-800 text-center line-clamp-4 min-h-20 transition-colors duration-300 group-hover/title:text-blue-600">
                        {{ product.title }}
                    </p>
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transform -translate-x-1/2 transition-all duration-300 group-hover/title:w-1/2"></span>
                </Link>

                <div class="relative px-4 py-3 border-y border-gray-100">
                    <div class="flex items-center justify-center space-x-1 mb-2">
                        <span class="text-2xl font-bold text-blue-600 transition-all duration-300 group-hover:scale-110">
                            {{ product.price }}
                        </span>
                        <sup class="text-blue-600 text-sm font-bold">$</sup>
                        <span class="text-sm text-gray-500 ml-1">per Item</span>
                    </div>

                    <div class="flex items-center justify-center space-x-2">
                        <span class="w-2 h-2 rounded-full"
                            :class="[product.stock > 0 ? 'bg-green-500' : 'bg-red-500']"></span>
                        <span class="text-sm">
                            <span class="font-bold">{{ product.stock }}</span> in stock
                        </span>
                    </div>
                </div>

            </div>

            <div class="p-4">
                <button
                    type="button"
                    class="relative w-full group/btn overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                    <div class="relative bg-white rounded-[6px] py-2.5 text-center transition-all duration-300 group-hover/btn:bg-opacity-0">
                        <span class="text-blue-600 font-medium transition-colors duration-300 group-hover/btn:text-white">
                            Buy Now
                        </span>

                        <span class="absolute right-4 top-1/2 -translate-y-1/2 transform opacity-0 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 translate-x-4 text-white">
                            →
                        </span>
                    </div>
                </button>
            </div>

        </div>

    </div>

</template>

<style scoped>
@keyframes shine {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}

.group:hover .shine {
    animation: shine 1.5s ease-in-out infinite;
}
</style>
