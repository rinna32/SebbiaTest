<script setup lang="ts">
import type { NewsFull, NewsShort } from '~/types/News'

const route = useRoute()

const shortNews: NewsShort | null = history.state.title ? history.state : null

const { data: fullNews } = useFetch<NewsFull>(`/api/news/${route.params.id}`)

const news = computed(() => fullNews.value ?? shortNews)
</script>

<template>
  <article>
    <BackLink to="/" text="Назад" />

    <template v-if="news">
      <h1 class="text-2xl font-bold mt-2 mb-1">
        {{ news.title }}
      </h1>

      <p class="text-sm text-gray-500">
        {{ new Date(news.date).toLocaleString('ru-RU') }}
      </p>

      <p class="mt-3 text-lg text-gray-700">
        {{ news.shortDescription }}
      </p>
    </template>

    <div
      v-if="fullNews"
      class="mt-4 [&_p]:mb-2 [&_a]:text-blue-600 [&_a]:underline"
      v-html="fullNews.fullDescription"
    />

    <Loader v-else class="mt-4" />
  </article>
</template>
