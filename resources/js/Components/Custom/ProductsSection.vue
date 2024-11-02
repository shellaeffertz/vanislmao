<script setup>

import CollectionHeader from './CollectionHeader.vue';
import ProductCard from './ProductCard.vue';

defineProps({
    collection: {
        type: Object,
        required: true
    }
});

</script>

<template>

    <section class="max-w-7xl mx-auto px-6">

        <CollectionHeader :collection="collection" />

        <div v-if="collection.products.length" class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3 mt-8">

            <ProductCard
                v-for="product in collection.products"
                :key="product.id"
                :product="product" 
            />

        </div>

        <p class="my-8 text-gray-500 capitalize text-center" v-else>* no products found *</p>

    </section>

</template>