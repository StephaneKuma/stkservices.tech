<template>
    <div class="space-y-1">
        <div class="flex justify-end">
            <span class="text-base font-medium text-blue-700 dark:text-white">{{ label }}</span>
            <!-- <span class="text-sm font-medium text-blue-700 dark:text-white">{{ percentage }} %</span> -->
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="style"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label: string
    percentage: number
}>()

const style = computed(() => {
    let width = "width:" + props.percentage + "%;"
    return width;
})
</script>
