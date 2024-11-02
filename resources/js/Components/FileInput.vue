<script setup>

import { ref } from 'vue';

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue']);

let fileName = ref('Choose an image');

let file = ref(null);

let fileInput = ref(null);

const uploadFile = (e) => {

    file.value = e.target.files[0];
    if(file.value) {
        fileName.value =  file.value.name;
    } else {

        fileName.value = '';
    }
    emit('update:modelValue', file.value);
}

const cancelUpload = () => {

    file.value = null;
    fileInput.value.value = null;
    fileName.value = 'Choose an image';
    emit('update:modelValue', file.value);
}
</script>

<template>

    <div class="space-y-4">
        <div class="relative mt-2 bg-indigo-100 rounded-md h-28 border-2 border-dashed border-indigo-500">
            <input ref="fileInput" type="file" @input="uploadFile" class="relative z-10 h-full w-full text-transparent focus:outline-none file:bg-transparent file:border-transparent file:text-transparent" />
            <div class="absolute top-1/2 -translate-y-1/2 w-full">
                <span class="flex justify-center items-center gap-2 text-xl text-indigo-500 w-fit mx-auto">
                    <i class="fa-solid fa-image"></i>
                </span>
                <span class="block mt-2 text-sm text-center">{{ fileName }}</span>
            </div>
            <button v-if="file" @click="cancelUpload" type="button" class="absolute top-1 right-3 z-20 text-gray-800 hover:text-gray-600">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>
    </div>

</template>