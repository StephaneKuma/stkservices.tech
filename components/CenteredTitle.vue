<template>
    <div class="flex flex-col justify-center items-center mb-14">
        <h5 v-show="hasSubTitle" class="text-xl md:text-base font-medium capitalize mb-2" v-html="subTitle"></h5>
        <h3
            class="text-gray-700 pb-6 text-4xl md:text-2xl text-center font-semibold relative capitalize after:absolute after:w-20 after:bottom-0 after:left-[41.666667%] after:border-b after:border-4 after:border-solid after:border-blue-500">
            {{ title }}
        </h3>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    subTitle?: string;
}>()

const hasSubTitle = computed(() => props.subTitle !== undefined)
</script>

