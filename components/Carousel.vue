<template>
    <div class="relative w-full h-full">
        <div class="flex justify-between w-full absolute top-1/2">
            <div class="w-10 bg-blue-100">
                <button @click="prev">
                    <ArrowCircleLeftIcon class="w-10 h-10 text-orange-600 overflow-hidden" />
                </button>
            </div>

            <div class="w-10 bg-blue-100">
                <button @click="next">
                    <ArrowCircleRightIcon class="w-10 h-10 text-blue-600 overflow-hidden" />
                </button>
            </div>
        </div>

        <div class="flex justify-center items-center relative">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline'

const emit = defineEmits<{
    (e: 'prev'): void
    (e: 'next'): void
}>()

const prev = () => {
    emit('prev')
}
const next = () => {
    emit('next')
}
</script>
