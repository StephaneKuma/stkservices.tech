<template>
    <div class="bg-white flex flex-col rounded-lg justify-center items-center space-y-4 py-8 px-8 text-gray-500">
        <div class="w-16 h-12 bg-gray-400 rounded-lg"></div>
        <span class="text-blue-700 text-xl md:text-lg text-center font-bold capitalize" v-html="title"></span>
        <span class="text-lg md:text-sm text-center font-semibold">{{ description }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>()
</script>
