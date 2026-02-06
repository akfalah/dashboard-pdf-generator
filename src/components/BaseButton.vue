<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
    default: 'Button',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})

const isDisabled = computed(() => props.disabled || props.loading)

const baseClasses =
  'inline-flex items-center gap-x-2 px-4 py-3 2xl:px-5 2xl-py-4 font-medium border rounded-md 2xl:rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'text-blue-500 enabled:hover:text-white bg-blue-100 enabled:hover:bg-blue-500 border-blue-500 focus-visible:ring-blue-500'
    case 'destructive':
      return 'text-white bg-red-500 enabled:hover:bg-red-600 focus-visible:ring-red-600'
    default:
      return 'text-white bg-blue-500 enabled:hover:bg-blue-600 focus-visible:ring-blue-600'
  }
})
</script>

<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :class="[
      baseClasses,
      variantClasses,
      fullWidth ? 'w-full' : 'w-fit',
      isDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <span
      v-if="loading"
      class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
    />

    <slot v-else name="icon" />

    <span>{{ text }}</span>
  </button>
</template>
