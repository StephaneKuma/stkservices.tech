<template>
    <div class="text-white bg-zinc-600 h-48 w-full flex flex-col justify-center items-center space-y-4">
        <h1 class="sm:text-5xl text-2xl font-bold capitalize">{{ bread }}</h1>
        <p class="text-sm sm:text-lg text-center">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    bread: string;
    description: string;
}>()
</script>
