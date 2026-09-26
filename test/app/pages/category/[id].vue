<script setup lang="ts">
import type { NewsShort } from '~/types/News'

const route = useRoute()

const news = ref<NewsShort[]>([])
const page = ref(0)
const loading = ref(false)
const finished = ref(false)


const fetchNextPage = async () => {
    loading.value = true

    const list = await $fetch<NewsShort[]>(`/api/categories/${route.params.id}/news`, {
        query: { page: page.value }
    })

    news.value.push(...list)
    page.value++
    finished.value = list.length < 10
    loading.value = false
}


fetchNextPage()
</script>

<template>
  <div>
    <BackLink to="/" text="Категории" />

    <h1 class="text-2xl font-bold mt-2 mb-4">
      Новости
    </h1>

    <ul v-if="news.length" class="space-y-3">
      <li v-for="item in news" :key="item.id">
        <NewsCard :news="item" />
      </li>
    </ul>

    <p v-else-if="finished" class="text-gray-500">
      В этой категории нет новостей.
    </p>

    <Loader v-if="loading" class="mt-4" />


    
    <button
      v-else-if="!finished"
      @click="fetchNextPage"
      class=" mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors ">
      Загрузить ещё
    </button>
  </div>
</template>
