<template>
    <section class="rounded-3xl mt-4 lg:px-24 px-12 relative">
        <div class="absolute right-[10%] top-1/2 rounded-full w-5 h-5 bg-blue-700 animate-bubble"></div>
        <div class="absolute left-[40%] bottom-7 rounded-full w-5 h-5 bg-orange-400 animate-bubble"></div>
        <div class="flex">
            <div class="md:basis-1/2 py-24 relative">
                <h1 class=" font-bold lg:text-3xl leading-6 relative capitalize">
                    Salut<br>
                    Je suis Stéphane alias Stekos<br>
                    développeur Fullstack
                    <div class="absolute left-[20%] top-1 rounded-full w-5 h-5 bg-blue-700/50"></div>
                </h1>
                <p class="mt-3 text-gray-600 font-medium text-xl">
                    Experience the startup system _ invest in startups
                </p>
                <p class="mt-3 text-gray-600 font-medium text-xl">
                    Reach the fastest growing companies.
                </p>
                <div class="mt-16">
                    <Button link="contact" linkTitle="Embauchez-nous" />
                </div>
            </div>
            <div class="basis-1/2 overflow-hidden relative hidden md:block">
                <img src="/hero.gif" alt="Stéphane Kuma" class="object-cover h-fit">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>
