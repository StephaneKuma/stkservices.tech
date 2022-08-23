<template>
    <div class="shadow-xl rounded-lg text-gray-500 space-y-5 group">
        <div class="static h-72 md:h-56 sm:h-40 bg-gray-50 rounded-t-lg">
            <div class="absolute right-0 top-5 bg-orange-500 h-10"></div>
        </div>
        <div class="lg:space-y-4 lg:px-8 md:px-6 space-y-2 px-4">
            <h1
                class="font-semibold lg:text-2xl md:text-xl text-center lg:text-left sm:text-base text-blue-700 capitalize">
                {{ title }}
            </h1>
            <p class="text-lg md:text-base sm:text-sm text-center lg:text-left mt-2" v-html="description"></p>
            <div class="flex justify-center lg:justify-start mt-2 pb-5">
                <Button :isLink="false" linkTitle="Lire la suite" />
            </div>

            <div></div>

            <div class="mt-5"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>()
</script>
