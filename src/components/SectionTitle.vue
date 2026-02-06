<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h2 class="text-2xl lg:text-3xl 2xl:text-5xl font-semibold">{{ text }}</h2>
</template>
