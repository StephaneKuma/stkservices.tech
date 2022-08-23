<template>
    <div class="shadow-xl rounded-lg text-gray-500 space-y-5 group">
        <div :class="{
            'bg-gray-200': !isStandard || isStandard === undefined,
            'bg-gradient-to-r from-orange-300 to-blue-600': isStandard,
        }"
            class="h-20 px-8 flex justify-center items-center rounded-t-lg transition duration-1000 group-hover:duration-300">
            <span :class="{
                'text-blue-700': !isStandard || isStandard === undefined,
                'text-gray-100': isStandard,
            }" class="font-semibold text-2xl sm:text-xl">{{ title }}</span>
        </div>

        <ul class="flex flex-col justify-center items-center lg:px-8 lg:space-y-4 md:px-6 sm:px-4 space-y-2">
            <li class="lg:text-lg md:text-base sm:text-sm">
                <span>{{ description }}</span>
            </li>
            <li class="font-semibold text-blue-700 text-2xl lg:text-lg md:text-base sm:text-sm">
                <span>{{ currencyString }}</span>
            </li>
            <li class="flex" v-for="i in 5">
                <CheckCircleIcon class="h-6 w-6 text-green-400 mr-1" />
                <span class="lg:text-lg md:text-base sm:text-sm">Lorem ipsum dolor sit.</span>
            </li>
        </ul>

        <div class="flex justify-center items-center px-8 pb-5">
            <Button :is-standard="isStandard" :isLink="false" linkTitle="Commander maintenant" />
        </div>

        <div></div>

        <div class="mt-5"></div>
    </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/outline'

const props = defineProps<{
    title: string;
    description: string;
    price: number;
    isStandard?: boolean;
}>()

const currencyString = computed(() => {
    return props.price.toLocaleString('fr-TG', { style: 'currency', currency: 'XOF' })
})
</script>
