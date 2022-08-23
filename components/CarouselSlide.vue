<template>
    <div v-show="index === visible" class="absolute top-0 bottom-0 left-0 right-0">
        <img :src="slide">
    </div>
</template>

<script setup lang="ts">
defineProps<{
    slide: string;
    index: number;
    visible: number;
}>()
</script>
