import { Journey } from '../.nuxt/components';
<template>
    <div class="timeline-event basis-1/2">
        <div class="timeline-event-icon">
            <ArrowNarrowLeftIcon class="w-10 h-10" />
        </div>
        <div class="timeline-event-date">23 Août 2022</div>
        <div class="timeline-event-content">
            <div class="timeline-event-title">Stage Développement Web</div>
            <div class="timeline-event-description">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo quaerat aperiam. Minima
                    repellat
                    rem id voluptates quibusdam vitae et, cupiditate tenetur sit rerum exercitationem ex nemo debitis
                    recusandae repellendus!
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowNarrowLeftIcon } from '@heroicons/vue/outline';

</script>

<style scoped>
</style>
