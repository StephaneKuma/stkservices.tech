import { PostItem } from '../.nuxt/components';
<template>
    <div class="text-gray-500">
        <CenteredTitle title="Derniers articles" subTitle="Blog" />

        <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
            <PostItem title="Javascript du zéro au héro" :description="description" />
            <PostItem title="Javascript du zéro au héro" :description="description" />
            <PostItem title="Javascript du zéro au héro" :description="description" />
        </div>
    </div>
</template>

<script setup lang="ts">
const description = "Lorem ipsum dolor sit amet adipisicing elit. Sunt enim, quas et libero excepturi!";
</script>
