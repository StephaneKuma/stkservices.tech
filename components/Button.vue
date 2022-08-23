<template>
    <div class="relative group">
        <div
            class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-wiggle">
        </div>
        <div class="relative grid gap-8 items-start justify-center">
            <NuxtLink v-show="isLink" :class="{
                'bg-gray-100 group-hover:bg-blue-500': !isStandard || isStandard === undefined,
                'bg-blue-500 group-hover:bg-gray-100': isStandard,
            }" :to="link"
                class="px-8 py-4 sm:px-4 sm:px-2 transition duration-1000 group-hover:duration-300 rounded-lg leading-none flex items-center">
                <span :class="{
                    'text-blue-500 group-hover:text-gray-100': !isStandard || isStandard === undefined,
                    'text-gray-100 group-hover:text-blue-500': isStandard,
                }" class="md:text-sm font-medium transition duration-1000 group-hover:duration-300 capitalize">
                    {{ linkTitle }}
                </span>
            </NuxtLink>
            <button v-show="!isLink" :class="{
                'bg-gray-100 group-hover:bg-blue-500': !isStandard || isStandard === undefined,
                'bg-blue-500 group-hover:bg-gray-100': isStandard,
            }"
                class="px-8 py-4 sm:px-4 sm:px-2 transition duration-1000 group-hover:duration-300 rounded-lg leading-none flex items-center">
                <span :class="{
                    'text-blue-500 group-hover:text-gray-100': !isStandard || isStandard === undefined,
                    'text-gray-100 group-hover:text-blue-500': isStandard,
                }" class="md:text-sm font-medium transition duration-1000 group-hover:duration-300 capitalize">
                    {{ linkTitle }}
                </span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    isLink: boolean;
    link?: string;
    linkTitle?: string;
    isStandard?: boolean;
}>()
</script>
