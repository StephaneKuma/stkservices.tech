<template>
    <Carousel @next="next" @prev="prev">
        <CarouselSlide v-for="(slide, index) in slides" :key="slide" :slide="slide" :index="index" :visible="visible" />
    </Carousel>
</template>

<script setup lang="ts">
const visible = ref(0)

const slides = [
    'https://picsum.photos/id/237/600/350',
    'https://picsum.photos/id/236/600/350',
    'https://picsum.photos/id/235/600/350',
    'https://picsum.photos/id/234/600/350',
    'https://picsum.photos/id/233/600/350',
    'https://picsum.photos/id/232/600/350',
    'https://picsum.photos/id/231/600/350',
    'https://picsum.photos/id/230/600/350',
    'https://picsum.photos/id/228/600/350',
    'https://picsum.photos/id/229/600/350',
];

const slidesLength = computed(() => slides.length - 1)

const prev = () => {
    console.log('Valeur précédente ' + visible.value)
    visible.value--

    if (visible.value <= 0) {
        console.log('Valeur précédente ' + visible.value)
        visible.value = slidesLength.value - 1
    }
}
const next = () => {
    console.log('Valeur précédente ' + visible.value)
    visible.value++

    if (visible.value >= slidesLength.value) {
        console.log('Valeur précédente ' + visible.value)
        visible.value = 0
    }
}
</script>
