<script setup>

import Modal from '@/Components/Modal.vue';
import { useForm } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import TextareaInput from './TextareaInput.vue';
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
    }
});

const form = useForm({
  title: '',
  description: '',
});

const close = () => {
    form.reset();
    emit('close');
};

const submitInfo = () => {
    form.post(`/collection/store`, {
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
        <form @submit.prevent="submitInfo">

            <div class="px-6 py-4 space-y-4">

                <h3 class="text-lg font-medium text-gray-900">
                    Add New Collection
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

            </div>

            <div class="flex flex-row justify-end gap-2 px-6 py-4 bg-gray-100 text-right">
                <PrimaryButton @click="close()" type="button">cancel</PrimaryButton>
                <PrimaryButton type="submit" :disabled="form.processing">Add</PrimaryButton>
            </div>
        </form>

    </Modal>

</template>
