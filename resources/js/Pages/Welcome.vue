<script setup>

import { ref } from 'vue';
import AppLayout from '../Layouts/AppLayout.vue';
import Contact from '../Components/Custom/Contact.vue';
import FAQSection from '../Components/Custom/FAQSection.vue';
import FooterSection from '../Components/Custom/FooterSection.vue';
import ProductsSection from '../Components/Custom/ProductsSection.vue';
import AddCollectionModal from '../Components/Custom/AddCollectionModal.vue';
import CollectionsDropdown from '../Components/Custom/CollectionsDropdown.vue';

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

let showAddCollectionModal = ref(false);

</script>

<template>

    <AppLayout title="Welcome">

        <CollectionsDropdown :collections="collections" :currentCollection="currentCollection" @show-add-collection-modal="showAddCollectionModal = true" />

        <ProductsSection class="my-16" v-for="collection in collections" :key="collection.id" :collection="collection" />

        <FAQSection />

        <Contact />

        <FooterSection class="mt-16" />
    </AppLayout>

    <AddCollectionModal :show="showAddCollectionModal" @close="showAddCollectionModal = false" />

</template>
