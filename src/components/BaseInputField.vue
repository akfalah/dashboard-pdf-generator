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
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    default: 4,
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
    type: [String, Number],
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const isTextArea = computed(() => props.type === 'textarea')

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="w-full flex flex-col gap-y-2">
    <label class="font-medium" :for="id">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <textarea
      v-if="isTextArea"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :value="modelValue"
      @input="onInput"
      class="px-3 py-2 resize-none border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md 2xl:rounded-lg transition"
      :class="
        error ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-blue-500/75'
      "
    />

    <input
      v-else
      :type="type"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="onInput"
      class="w-full px-3 py-2 border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md 2xl:rounded-lg transition"
      :class="
        error ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-blue-500/75'
      "
    />

    <p v-if="error" class="text-xs 2xl:text-base text-red-500">
      {{ error }}
    </p>
  </div>
</template>
