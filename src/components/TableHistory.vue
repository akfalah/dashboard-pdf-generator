<script setup>
import { formatAmount, formatDateTime } from '@/utils/formatHelpers'
import SectionTitle from './SectionTitle.vue'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

const sortedData = computed(() =>
  [...props.data].sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)),
)
</script>

<template>
  <section
    class="flex flex-col gap-y-4 2xl:gap-y-6 p-6 2xl:p-8 bg-white rounded-lg 2xl:rounded-xl shadow"
  >
    <SectionTitle text="Daftar History Generate" />

    <div class="overflow-x-scroll">
      <table class="w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul Laporan</th>
            <th>Ukuran Halaman</th>
            <th>Nominal</th>
            <th>Tanggal</th>
          </tr>
        </thead>

        <tbody v-if="data.length">
          <tr v-for="(value, index) in sortedData" :key="index">
            <td>{{ `${index + 1}.` }}</td>
            <td class="text-start!">{{ value?.title }}</td>
            <td>{{ value?.pageSize }}</td>
            <td>{{ formatAmount(value?.amount) }}</td>
            <td>{{ formatDateTime(value?.createdAt) }}</td>
          </tr>
        </tbody>

        <tbody v-else>
          <tr>
            <td colspan="5" class="text-center text-gray-500 font-medium">
              Tidak ada data history
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
