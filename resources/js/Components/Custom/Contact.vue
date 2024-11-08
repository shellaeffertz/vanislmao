<script setup>
import { ref, onMounted } from 'vue';
import SectionHeader from './SectionHeader.vue';

const contacts = [
    {
        type: 'telegram',
        title: 'Telegram',
        description: 'Get in touch with us.',
        link: 'https://t.me/VANISZLMAO',
        value: null,
        icon: 'fa-solid fa-paper-plane',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-blue-600',
        hoverBorder: 'hover:border-blue-200/60',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-500',
        hoverIconBg: 'group-hover:bg-blue-500',
        actionColor: 'text-blue-600'
    },
    {
        type: 'email',
        title: 'Email',
        description: 'sales@vanislmao.com',
        value: 'sales@vanislmao.com',
        icon: 'fa-solid fa-envelope',
        gradientFrom: 'from-indigo-500',
        gradientTo: 'to-indigo-600',
        hoverBorder: 'hover:border-indigo-200/60',
        iconBg: 'bg-indigo-50',
        iconColor: 'text-indigo-500',
        hoverIconBg: 'group-hover:bg-indigo-500',
        actionColor: 'text-indigo-600'
    },
    {
        type: 'discord',
        title: 'Discord',
        description: 'vaniszlmao_35378',
        value: 'vaniszlmao_35378',
        icon: 'fa-brands fa-discord',
        gradientFrom: 'from-purple-500',
        gradientTo: 'to-purple-600',
        hoverBorder: 'hover:border-purple-200/60',
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-500',
        hoverIconBg: 'group-hover:bg-purple-500',
        actionColor: 'text-purple-600'
    }
];

const mounted = ref(false);
const showToast = ref(false);
const copiedStates = ref({
    email: false,
    discord: false
});

const isLoading = ref(true);
const animationComplete = ref(false);

onMounted(() => {

    mounted.value = true;

    setTimeout(() => {
        isLoading.value = false;
    }, 800);

    setTimeout(() => {
        animationComplete.value = true;
    }, 2000);
});

const copyToClipboard = (text) => {
  try {

    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);

    showToast.value = true;

    setTimeout(() => {
      showToast.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<template>
    <section
        id="contact"
        class="w-full py-8 px-4 relative overflow-hidden"
        :class="{ 'animate-fade-in': mounted }"
    >
        <div class="max-w-7xl mx-auto relative space-y-8">
            <!-- Animated Section Header -->
            <div
                class="opacity-0 transform translate-y-4"
                :class="{ 'animate-slide-up': !isLoading }"
            >
                <SectionHeader
                    title="Connect With Our Us"
                    description="Join our growing community and stay updated with the latest developments, exclusive offers, and engaging discussions."
                />
            </div>

            <!-- Contact Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Dynamic Contact Cards -->
                <template v-for="(contact, index) in contacts" :key="contact.type">
                    <!-- Telegram-style link card -->
                    <a
                        v-if="contact.link"
                        :href="contact.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group relative block opacity-0"
                        :class="{ 'animate-card-pop-in': !isLoading }"
                        :style="`animation-delay: ${800 + (index * 200)}ms`"
                    >
                        <div :class="`absolute inset-0 bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[15px]`"></div>
                        <div class="relative h-full p-8 shadow-md rounded-2xl bg-white border border-slate-200/60"
                             :class="contact.hoverBorder">
                            <div class="space-y-8">
                                <!-- Icon with pulse animation -->
                                <div :class="`w-14 h-14 rounded-xl ${contact.iconBg} flex items-center justify-center transition-all duration-500 ${contact.hoverIconBg} group-hover:rotate-6`">
                                    <i :class="`${contact.icon} ${contact.iconColor} text-xl transition-colors duration-500 group-hover:text-white animate-icon-pulse`"
                                       :style="`animation-delay: ${1200 + (index * 200)}ms`"></i>
                                </div>
                                <!-- Animated Content -->
                                <div class="space-y-3">
                                    <h3 class="text-xl font-semibold text-slate-900">{{ contact.title }}</h3>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ contact.description }}</p>
                                </div>
                                <!-- Action -->
                                <div :class="`flex items-center text-sm ${contact.actionColor} font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`">
                                    <span>Let's start</span>
                                    <i class="fa-solid fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                                </div>
                            </div>
                        </div>
                    </a>

                    <!-- Copy-to-clipboard button card -->
                    <button
                        v-else
                        class="group relative opacity-0"
                        :class="{ 'animate-card-pop-in': !isLoading }"
                        :style="`animation-delay: ${800 + (index * 200)}ms`"
                        @click="copyToClipboard(contact.value, contact.type)"
                    >
                        <div :class="`absolute inset-0 bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[15px]`"></div>
                        <div class="relative h-full p-8 shadow-md rounded-2xl bg-white border border-slate-200/60"
                             :class="contact.hoverBorder">
                            <div class="space-y-8">
                                <!-- Icon with pulse animation -->
                                <div :class="`w-14 h-14 rounded-xl ${contact.iconBg} flex items-center justify-center transition-all duration-500 ${contact.hoverIconBg} group-hover:rotate-6`">
                                    <i :class="`${contact.icon} ${contact.iconColor} text-xl transition-colors duration-500 group-hover:text-white animate-icon-pulse`"
                                       :style="`animation-delay: ${1200 + (index * 200)}ms`"></i>
                                </div>
                                <!-- Animated Content -->
                                <div class="space-y-3">
                                    <h3 class="text-xl font-semibold text-slate-900">{{ contact.title }}</h3>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ contact.value }}</p>
                                </div>
                                <!-- Action -->
                                <div class="flex items-center text-sm font-medium">
                                    <span v-if="copiedStates[contact.type]" class="text-green-600 flex items-center">
                                        <i class="fa-solid fa-check w-4 h-4 mr-1.5 animate-check"></i>
                                        Copied!
                                    </span>
                                    <span v-else :class="`${contact.actionColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`">
                                        Click to copy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </button>
                </template>
            </div>

            <!-- Toast Notification -->
            <div
                v-show="showToast"
                class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-lg
                        transition-all duration-500 flex items-center space-x-2"
                :class="[showToast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']"
            >
                <i class="fa-solid fa-check text-green-400 w-4 h-4"></i>
                <span class="text-sm font-medium">Contact Copied</span>
            </div>
        </div>
    </section>
</template>

<style scoped>

@keyframes card-pop-in {
    0% {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    70% {
        transform: scale(1.05) translateY(-5px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes icon-pulse {
    0% {
        transform: scale(0);
    }
    70% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes grid-fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.03;
    }
}

@keyframes blur-in {
    0% {
        opacity: 0;
        transform: scale(0.8) translateX(0);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateX(0);
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-card-pop-in {
    animation: card-pop-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-icon-pulse {
    animation: icon-pulse 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-grid-fade-in {
    animation: grid-fade-in 1s ease-out forwards;
}

.animate-blur-in {
    animation: blur-in 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-fade-out {
    animation: fade-out 0.6s ease-out forwards;
}

.animate-slide-up {
    animation: slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.check {
    animation: check 0.3s ease-out;
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out;
}

@keyframes check {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>
