<script setup lang="ts">
import type { NewsShort } from '~/types/News'

const props = defineProps<{news: NewsShort}>()
</script>

<template>
  <NuxtLink :to="{ path: `/news/${news.id}`, state: { ...props.news } }"
    class="block bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-400 transition-colors">
    <h2 class="font-semibold">
      {{ news.title }}
    </h2>

    <p class="text-sm text-gray-500">
      {{ new Date(news.date).toLocaleString('ru-RU') }}
    </p>

    <p class="mt-1 text-gray-700">
      {{ news.shortDescription }}
    </p>
  </NuxtLink>
</template>
