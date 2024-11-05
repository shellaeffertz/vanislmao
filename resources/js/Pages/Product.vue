<script setup>

import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';
import Contact from '../Components/Custom/Contact.vue';
import PrimaryButton from '../Components/PrimaryButton.vue';
import FAQSection from '../Components/Custom/FAQSection.vue';
import FooterSection from '../Components/Custom/FooterSection.vue';
import  ConfirmationModal from '../Components/ConfirmationModal.vue';
import UpdateProductModal from '../Components/Custom/UpdateProductModal.vue';
import ProductInformation from '../Components/Custom/ProductInformation.vue';

let props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

let showUpdateModal = ref(false);

let showDeleteConfrimation = ref(false);

const form = useForm({
  id: props.product.id
});

const deleteCollection = (id) => {

    form.delete(`/product/${id}/destroy`);
    showDeleteConfrimation.value = false;
}

</script>

<template>

    <AppLayout title="Product">

        <div v-if="$page.props.auth.user" class="max-w-7xl mx-auto px-6 flex items-center gap-2 mt-16">
            <button @click="showUpdateModal = true" class="px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white" type="button">Edit</button>
            <button @click="showDeleteConfrimation = true" class="px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white" type="button">Delete</button>
        </div>

        <ProductInformation :product="product" class="mb-16" />

        <FAQSection/>

        <Contact />

        <FooterSection class="mt-16" />

    </AppLayout>

    <UpdateProductModal :show="showUpdateModal" :product="product" @close="showUpdateModal = false" />

    <ConfirmationModal :show="showDeleteConfrimation">

        <template #title>
            Delete Collection Confirmation
        </template>

        <template #content>
            <p class="text-base font-bold">
                Are you sure you want to delete this product ?
            </p>
            <ul class="pl-5 mt-2 list-disc text-red-500">
                <li>
                    Once deleted you won't be able to recover it !
                </li>
            </ul>
        </template>

        <template #footer>
            <div class="flex flex-row justify-end gap-2 bg-gray-100 text-right">
                <PrimaryButton @click="showDeleteConfrimation = false" type="button">cancel</PrimaryButton>
                <PrimaryButton @click="deleteCollection(product.id)" type="submit">delete</PrimaryButton>
            </div>
        </template>

    </ConfirmationModal>

</template>
