<template>
    <NuxtLink
        class="px-8 py-4 rounded-full text-white capitalize font-medium bg-blue-500 hover:bg-blue-300 transition-all duration-300"
        :to="link">{{ linkTitle }}
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    link?: string;
    linkTitle: string;
}>()
</script>
