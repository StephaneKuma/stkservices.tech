<template>
    <div :class="{
        'text-right': right
    }" class="text-gray-500">
        <h5 class="text-xl font-medium capitalize">{{ subTitle }}</h5>
        <h3 class="text-gray-700 pb-6 text-4xl font-semibold relative capitalize" :class="{
    'after:absolute after:w-1/6 after:bottom-0 after:right-0 after:border-b after:border-4 after:border-solid after:border-blue-500': right,
    'after:absolute after:w-1/6 after:bottom-0 after:left-0 after:border-b after:border-4 after:border-solid after:border-blue-500': !right,
        }">
            {{ title[0] }} <br> {{ title[1] }}
        </h3>
        <p class="mt-4 text-lg">
            {{ description }}
        </p>
        <div class="mt-8" v-show="btn">
            <NuxtLink
                class="px-8 py-4 rounded-full text-white capitalize font-medium bg-blue-500 hover:bg-blue-300 transition-all duration-300"
                :to="link">{{ linkTitle }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string[];
    subTitle: string;
    description: string;
    btn: boolean;
    link: string;
    linkTitle: string|null;
    right: boolean;
}>()

</script>
