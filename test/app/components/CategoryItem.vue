<script setup lang="ts">
import type { Category } from '~/types/News'

defineProps<{category: Category}>()
</script>

<template>
  <NuxtLink :to="`/category/${category.id}`"
    class="block px-4 py-3 hover:bg-gray-100 transition-colors">
    {{ category.name }}
  </NuxtLink>
</template>
