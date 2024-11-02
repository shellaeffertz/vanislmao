<script setup>
import { ref, onMounted } from 'vue';
import SectionHeader from './SectionHeader.vue';

const faqs = ref([
    {
        question: 'How long does it take for the account to be delivered?',
        answer: 'We guarantee account delivery within 24 hours, though most accounts are delivered within just a few hours of purchase. If we are unable to meet this 24-hour timeframe, please feel free to reach out to us directly. In such cases, we offer a refund if the delay was on our end and affected the delivery of your account.',
        isOpen: false
    },
    {
        question: 'What is the warranty policy for accounts?',
        answer: 'We currently do not provide a warranty for issues related to account blocking. However, if a situation arises where we can assist (such as minor issues), we will gladly offer our help at no additional cost. In the rare event that an account is locked without any action on your part, we will replace the account at no charge. For any other concerns, please feel free to contact us for assistance.',
        isOpen: false
    },
    {
        question: 'Which cryptocurrencies are accepted as payment?',
        answer: 'We accept payments in USDT (Tether) and ETH (Ethereum) directly through our website. If you prefer to use a different cryptocurrency, please reach out to us via Telegram. We are flexible and open to accepting a wide variety of cryptocurrencies to make the payment process as convenient as possible for you.',
        isOpen: false
    },
    {
        question: 'Do you accept MM (Middleman) or Escrow services?',
        answer: 'Yes, we do accept middleman or escrow services for additional security and peace of mind. If you\'re interested in using either of these options, please contact us through Telegram for further details and arrangements.',
        isOpen: false
    }
]);

onMounted(() => {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 150}ms`;
    });
});

const toggleAnswer = (index) => {
    faqs.value.forEach((faq, i) => {
        if (i !== index) faq.isOpen = false;
    });
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
    <div id="faq" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div class="max-w-4xl mx-auto">
            <SectionHeader
                title="Frequently Asked Questions"
                description="Here, you'll find answers to the most common questions about our services, policies, and payment options."
                class="mb-16 text-center"
            />

            <div class="space-y-5">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="faq-item"
                >
                    <button
                        @click="toggleAnswer(index)"
                        class="flex items-center w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group"
                        :class="{'is-active': faq.isOpen}"
                        :aria-expanded="faq.isOpen"
                    >
                        <div class="mr-8 flex-1">
                            <h3 class="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                                {{ faq.question }}
                            </h3>
                        </div>
                        <div class="flex-shrink-0">
                            <div
                                class="toggle-icon"
                                :class="{'is-active': faq.isOpen}"
                            >
                                <span class="line-1"></span>
                                <span class="line-2"></span>
                            </div>
                        </div>
                    </button>

                    <transition
                        name="slide"
                        @enter="el => el.style.height = el.scrollHeight + 'px'"
                        @leave="el => el.style.height = '0'"
                    >
                        <div
                            v-show="faq.isOpen"
                            class="answer-wrapper overflow-hidden"
                        >
                            <div class="pt-4 pb-2">
                                <p class="text-slate-600 leading-relaxed">
                                    {{ faq.answer }}
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.faq-item {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
    border-radius: 1rem;
    opacity: 0;
    animation: fadeSlideIn 0.6s ease-out forwards;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.faq-item:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
    border-color: #e5e7eb;
}

/* Toggle Icon Styles */
.toggle-icon {
    position: relative;
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
}

.toggle-icon .line-1,
.toggle-icon .line-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    background-color: #2563eb;
    transition: transform 0.3s ease;
}

.toggle-icon .line-1 {
    transform: translate(-50%, -50%);
}

.toggle-icon .line-2 {
    transform: translate(-50%, -50%) rotate(90deg);
}

.toggle-icon.is-active .line-1 {
    transform: translate(-50%, -50%) rotate(180deg);
}

.toggle-icon.is-active .line-2 {
    transform: translate(-50%, -50%) rotate(0deg);
}

/* Entrance Animation */
@keyframes fadeSlideIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Answer Transition */
.slide-enter-active,
.slide-leave-active {
    transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
    height: 0;
}

/* Active State */
button.is-active {
    border-bottom-color: transparent;
}

button.is-active h3 {
    color: #2563eb;
}

/* Focus States */
.faq-item:focus-within {
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    border-color: #93c5fd;
}

/* Typography Enhancements */
h3 {
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.text-slate-600 {
    line-height: 1.6;
    letter-spacing: 0.01em;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
    .faq-item {
        padding: 1.25rem;
    }

    h3 {
        font-size: 1rem;
    }

    .toggle-icon {
        width: 20px;
        height: 20px;
    }
}
</style>
