import { MailIcon } from '@heroicons/vue/outline';
<template>
    <div
        class="hidden sm:h-1/3 sm:flex sm:flex-col sm:justify-center sm:sticky sm:top-1/4 sm:mt-24 sm:self-start sm:left-0">
        <div class="block h-50">
            <a href="mailto:kumastephane@gmail.com">
                <MailIcon class="w-10 h-10 text-red-500 rounded" />
            </a>
            <a href="mailto:kumastephane@gmail.com">
                <MailIcon class="w-10 h-10 text-blue-500 rounded" />
            </a>
            <a href="mailto:kumastephane@gmail.com">
                <MailIcon class="w-10 h-10 text-yellow-500 rounded" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MailIcon } from '@heroicons/vue/solid'
</script>
