<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  prefix: {
    type: String,
    default: 'Rp',
  },
  placeholder: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

const displayValue = computed(() => {
  if (props.modelValue === null || props.modelValue === '') return ''
  return new Intl.NumberFormat('id-ID').format(props.modelValue)
})

const handleKeydown = (e) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab']

  if (allowedKeys.includes(e.key)) return

  if (!/^\d$/.test(e.key)) {
    e.preventDefault()
  }
}

const handleInput = (e) => {
  const raw = e.target.value
  const sanitized = raw.replace(/\D/g, '')
  emit('update:modelValue', sanitized ? Number(sanitized) : 0)
}
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label :for="id" class="font-medium">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="relative flex items-center">
      <span class="absolute left-3 text-gray-500 font-medium pointer-events-none select-none">
        {{ prefix }}
      </span>

      <input
        type="text"
        :id="id"
        :name="id"
        :placeholder="placeholder"
        :value="displayValue"
        @keydown="handleKeydown"
        @input="handleInput"
        :disabled="disabled"
        inputmode="numeric"
        class="w-full px-3 py-2 pl-12 border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md 2xl:rounded-lg transition"
        :class="
          error
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'border-gray-300 focus-visible:ring-blue-500'
        "
      />
    </div>

    <p v-if="error" class="text-xs 2xl:text-base text-red-500">
      {{ error }}
    </p>
  </div>
</template>
