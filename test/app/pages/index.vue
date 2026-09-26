<script setup lang="ts">
import type { Category } from '~/types/News'

const { data: categories, status } = useFetch<Category[]>('/api/categories')
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Категории
    </h1>

    <Loader v-if="status === 'pending'" />

    <ul v-else class="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
      <li v-for="category in categories" :key="category.id">
        <CategoryItem :category="category" />
      </li>
    </ul>
  </div>
</template>
