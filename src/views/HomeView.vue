<script setup>
import { ref, watch } from 'vue'

import TopBar from '@/components/TopBar.vue'
import ReportForm from '@/components/ReportForm.vue'
import TableHistory from '@/components/TableHistory.vue'

const histories = ref(JSON.parse(localStorage.getItem('histories') || '[]'))

const handleGenerated = (item) => {
  histories.value.push(item)
}

watch(
  histories,
  (val) => {
    localStorage.setItem('histories', JSON.stringify(val))
  },
  { deep: true },
)
</script>

<template>
  <TopBar />

  <main class="min-h-dvh w-full px-6 lg:px-8 xl:px-16 2xl:px-18 py-6 lg:py-8 xl:py-10 2xl:py-12 flex flex-col gap-y-6 lg:gap-y-8 xl:gap-y-10 2xl:gap-y-12 bg-gray-100">
    <ReportForm @generated="handleGenerated" />

    <TableHistory :data="histories" />
  </main>
</template>
