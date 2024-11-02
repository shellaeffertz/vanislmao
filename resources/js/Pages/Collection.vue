<script setup>

import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Contact from '../Components/Custom/Contact.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import FAQSection from '../Components/Custom/FAQSection.vue';
import ConfirmationModal from '@/components/ConfirmationModal.vue';
import FooterSection from '../Components/Custom/FooterSection.vue';
import AddProductModal from '../Components/Custom/AddProductModal.vue';
import ProductsSection from '../Components/Custom/ProductsSection.vue';
import AddCollectionModal from '../Components/Custom/AddCollectionModal.vue';
import CollectionsDropdown from '../Components/Custom/CollectionsDropdown.vue';
import UpdateCollectionModal from '../Components/Custom/UpdateCollectionModal.vue';
let props = defineProps({
    collection: {
        type: Object,
        required: true
    },
    collections: {
        type: Object,
        required: true
    },
    currentCollection: {
        required: true,
        default: 'All'
    }
});

let showUpdateModal = ref(false);

let showDeleteConfrimation = ref(false);

let showAddProductModal = ref(false);

let showAddCollectionModal = ref(false);

const form = useForm({
  id: props.collection.id
});

const deleteCollection = (id) => {

    form.delete(`/collection/${id}/destroy`);
    showDeleteConfrimation.value = false;
}

</script>

<template>

    <AppLayout title="Collection">

        <CollectionsDropdown :collections="collections" :currentCollection="currentCollection" @show-add-collection-modal="showAddCollectionModal = true" />

        <div v-if="$page.props.auth.user" class="max-w-7xl mx-auto px-6 flex items-center gap-2 mt-16">
            <button @click="showUpdateModal = true" class="px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white" type="button">Edit</button>
            <button @click="showDeleteConfrimation = true" class="px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white" type="button">Delete</button>
        </div>

        <ProductsSection :collection="collection" :class="{'my-16': !$page.props.auth.user, 'mt-4 mb-16': $page.props.auth.user}" />

        <div v-if="$page.props.auth.user" class="max-w-7xl mx-auto px-6 flex justify-end my-16">
            <button @click="showAddProductModal = true" class="px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white" type="button">Add Product</button>
        </div>

        <FAQSection />

        <Contact />

        <FooterSection class="mt-16" />

    </AppLayout>

    <AddCollectionModal :show="showAddCollectionModal" @close="showAddCollectionModal = false" />

    <AddProductModal :show="showAddProductModal" @close="showAddProductModal = false" :collection="collection" />

    <UpdateCollectionModal :show="showUpdateModal" :collection="collection" @close="showUpdateModal = false" />

    <ConfirmationModal :show="showDeleteConfrimation">

        <template #title>
            Delete Collection Confirmation
        </template>

        <template #content>
            <p class="text-base font-bold">
                Are you sure you want to delete this collection ?
            </p>
            <ul class="pl-5 mt-2 list-disc text-red-500">
                <li>
                    Once deleted you won't be able to recover it !
                </li>
                <li>
                    Also all it's products will be deleted as well !
                </li>
            </ul>
        </template>

        <template #footer>
            <div class="flex flex-row justify-end gap-2 bg-gray-100 text-right">
                <PrimaryButton @click="showDeleteConfrimation = false" type="button">cancel</PrimaryButton>
                <PrimaryButton @click="deleteCollection(collection.id)" type="submit">delete</PrimaryButton>
            </div>
        </template>

    </ConfirmationModal>

</template>
