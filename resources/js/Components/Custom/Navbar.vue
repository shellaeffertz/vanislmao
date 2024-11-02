<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, onUnmounted, onMounted} from 'vue';

// State
const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)

// Mock user data - replace with your auth store
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  profileUrl: '/api/placeholder/32/32',
  isOnline: true
}

// Toggle functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  if (!event.target.closest('.dropdown-container')) {
    dropdownOpen.value = false
  }
}

// Lifecycle hook to add click listener
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})

// Logout function - implement your logic
const logout = () => {
  console.log('Logging out...')
}
</script>

<template>
  <nav class="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex justify-between w-full">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <Link :href="route('home')" class="flex items-center group">
              <div class="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <span class="text-indigo-600 font-bold text-xl">A</span>
              </div>
              <span class="ml-3 text-white font-bold text-xl transform transition-all duration-300 group-hover:translate-x-1">AppName</span>
            </Link>
          </div>

          <!-- Desktop Navigation Links -->
          <div class="hidden sm:flex sm:items-center space-x-1">
            <Link
              :href="route('home')"
              class="px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg relative group"
            >
                Home
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        <!-- User Menu -->
        <div class="hidden sm:flex sm:items-center sm:ml-6">
          <div class="relative dropdown-container">
            <button 
              @click="toggleDropdown"
              class="flex items-center space-x-3 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 group"
            >
              <span class="font-medium">{{ user.name }}</span>
              <svg 
                class="w-4 h-4 transition-transform duration-300"
                :class="{'rotate-180': dropdownOpen}"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 transform scale-95"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-95"
            >
              <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 transform origin-top">
                <div class="py-1">
                  <div class="px-4 py-2 text-xs text-gray-400">Manage Account</div>
                  <Link
                    :href="route('profile')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                  >
                    <div class="flex items-center">
                      Profile
                    </div>
                  </Link>
                </div>
                <div class="py-1">
                  <button 
                    @click="logout"
                    class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                  >
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Log Out
                    </div>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button 
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
          >
            <svg 
              class="h-6 w-6 transform transition-transform duration-300"
              :class="{'rotate-90': mobileMenuOpen}"
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div v-show="mobileMenuOpen" class="sm:hidden bg-indigo-700">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <Link 
            :href="route('home')"
            class="block px-3 py-2 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-150"
          >
            Home
          </Link>
        </div>
        
        <div class="pt-4 pb-3 border-t border-indigo-800">
          <div class="flex items-center px-4">
            <div class="ml-3">
              <div class="text-base font-medium text-white">{{ user.name }}</div>
              <div class="text-sm font-medium text-indigo-200">{{ user.email }}</div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <Link
              :to="route('profile')"
              class="block px-3 py-2 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-150"
            >
                Profile
            </Link>
            <button 
              @click="logout"
              class="w-full text-left block px-3 py-2 text-white font-medium rounded-lg hover:bg-red-500 transition-colors duration-150"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>

</template>