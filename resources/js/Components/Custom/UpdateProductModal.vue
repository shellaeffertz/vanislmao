<script setup>

import { useForm } from '@inertiajs/vue3';
import Modal from '@/Components/Modal.vue';
import NumberInput from '../NumberInput.vue';
import TextareaInput from './TextareaInput.vue';
import TextInput from '@/Components/TextInput.vue';
import FileInput from '@/Components/FileInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import FormValidationError from './FormValidationError.vue';


const emit = defineEmits(['close']);

let props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    product: {
        type: Object,
        required: true
    }
});

const form = useForm({
    id: props.product.id,
    title: props.product.title,
    description: props.product.description,
    price: props.product.price,
    stock: props.product.stock,
    file: null,
    _method: 'PUT'
});

const close = () => {
    form.reset();
    emit('close');
};

const submitUpdates = (id) => {
    form.post(`/product/${id}/update`, {
        onSuccess: () => {
            close();
        }
    });
};

</script>

<template>

    <Modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close"
    >
        <form @submit.prevent="submitUpdates(product.id)">

            <div class="px-6 py-4 space-y-4">

                <h3 class="text-lg font-medium text-gray-900">
                    Update Product
                </h3>

                <div>
                    <InputLabel for="title">Title :</InputLabel>
                    <TextInput class="w-full" id="title" v-model="form.title" />
                    <FormValidationError v-if="form.errors.title">{{ form.errors.title }}</FormValidationError>
                </div>

                <div>
                    <InputLabel for="description">Description :</InputLabel>
                    <TextareaInput class="w-full" id="description" v-model="form.description" />
                    <FormValidationError v-if="form.errors.description">{{ form.errors.description }}</FormValidationError>
                </div>

                <div>
                    <InputLabel for="price">Price :</InputLabel>
                    <TextInput class="w-full" id="price" v-model="form.price" />
                    <FormValidationError v-if="form.errors.price">{{ form.errors.price }}</FormValidationError>
                </div>

                <div>
                    <InputLabel for="stock">Stock :</InputLabel>
                    <NumberInput class="w-full" id="stock" v-model="form.stock" />
                    <FormValidationError v-if="form.errors.stock">{{ form.errors.stock }}</FormValidationError>
                </div>

                <div>
                    <InputLabel for="file">Image :</InputLabel>
                    <FileInput class="w-full" id="file" v-model="form.file" />
                    <FormValidationError v-if="form.errors.file">{{ form.errors.file }}</FormValidationError>
                </div>

            </div>

            <div class="flex flex-row justify-end gap-2 px-6 py-4 bg-gray-100 text-right">
                <PrimaryButton @click="close()" type="button">cancel</PrimaryButton>
                <PrimaryButton type="submit" :disabled="form.processing">update</PrimaryButton>
            </div>
        </form>

    </Modal>

</template>
