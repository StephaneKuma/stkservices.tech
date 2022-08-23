<template>
    <div class="bg-white flex flex-col rounded-lg justify-center items-center space-y-4 py-8 text-blue-700">
        <div class="w-20 h-20 bg-gray-400 rounded-lg"></div>
        <span class="text-3xl sm:text-lg font-bold uppercase">{{ count }}</span>
        <span class="text-2xl sm:text-base text-center font-semibold uppercase">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    count: string;
}>()
</script>
