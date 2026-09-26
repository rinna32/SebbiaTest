<script setup lang="ts">
const props = defineProps<{to: string, text: string}>()

const router = useRouter()


const handleBack = () => {
    if (window.history.state?.back) {
        router.back()
    } else {
        router.push(props.to)
    }
}
</script>

<template>
  <button @click="handleBack" class="text-sm text-blue-600 hover:underline">
    ← {{ text }}
  </button>
</template>
