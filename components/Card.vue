<template>
    <div :class="{
        'text-right': right
    }" class="text-gray-500">
        <h5 v-show="hasSubTitle" class="lg:text-xl md:text-base text-sm font-medium capitalize mb-2">{{ subTitle }}</h5>
        <h3 class="text-gray-700 pb-6 lg:text-4xl md:text-2xl text-xl font-semibold relative capitalize" :class="{
            'after:absolute after:w-20 after:bottom-0 after:right-0 after:border-b after:border-4 after:border-solid after:border-blue-500': right,
            'after:absolute after:w-20 after:bottom-0 after:left-0 after:border-b after:border-4 after:border-solid after:border-blue-500': !right,
        }">
            {{ title[0] }} <br> {{ title[1] }}
        </h3>
        <p v-show="hasDescription" class="mt-4 lg:text-lg sm:text-base text-sm" v-html="description"></p>
        <div class="mt-8" v-show="btn">
            <div class="flex" :class="{
                'justify-end': right,
                'justify-start': !right,
            }">
                <Button :isLink="true" :link="link" :linkTitle="linkTitle" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { propsToAttrMap } from '@vue/shared';


const props = defineProps<{
    title: string[];
    subTitle?: string;
    description?: string;
    btn?: boolean;
    link?: string;
    linkTitle?: string;
    right?: boolean;
}>()

const hasSubTitle = computed(() => props.subTitle !== undefined)

const hasDescription = computed(() => props.description !== undefined)

</script>
