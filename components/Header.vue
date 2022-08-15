import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="bg-gray-300 text-white h-8 hidden md:flex justify-between items-center lg:px-24 px-12">
        <ul class="flex items-center space-x-5">
            <li>
                <a href="tel:+22893413639" class="flex items-center font-semibold">
                    <PhoneIcon class="h-6 w-6 text-blue-500 mr-1" />
                    <span class="text-sm">+22893413639</span>
                </a>
            </li>
            <li>
                <a href="mailto:kumastephane@gmail.com" class="flex items-center font-semibold">
                    <MailIcon class="h-6 w-6 text-red-500 mr-1" />
                    <span class="text-sm">kumastephane@gmail.com</span>
                </a>
            </li>
        </ul>

        <ul class="flex items-center space-x-5 mr-4">
            <li>
                <a class="texts-sm text-gray-600" href="http://github.com/StephaneKuma" target="_blank">
                    <img src="/github.svg" alt="GitHub" class="h-5 w-5">
                </a>
            </li>
            <li>
                <a class="texts-sm text-gray-600" href="http://github.com/StephaneKuma" target="_blank">
                    <img src="/linkedin.svg" alt="GitHub" class="h-5 w-5">
                </a>
            </li>
            <li>
                <a class="texts-sm text-gray-600" href="http://github.com/StephaneKuma" target="_blank">
                    <img src="/facebook.svg" alt="GitHub" class="h-5 w-5">
                </a>
            </li>
            <li>
                <a class="texts-sm text-gray-600" href="https://msng.link/o/?$tekos=tg" target="_blank">
                    <img src="/telegram.svg" alt="GitHub" class="h-5 w-5">
                </a>
            </li>
            <li>
                <a class="texts-sm text-gray-600" href="http://wa.me/22893413639" target="_blank">
                    <img src="/whatsapp.svg" alt="GitHub" class="h-5 w-5 text-green-500">
                </a>
            </li>
        </ul>
    </div>
    <header
        class="h-16 w-full z-50 lg:px-24 px-12 text-gray-700 shadow-sm bg-opacity-75 bg-gradient-to-r from-orange-100 via-blue-50 to-blue-100 sticky top-0">
        <nav class="flex justify-between items-center h-16 w-full ">
            <div class="w-1/6">
                <NuxtLink to="/">
                    <img src="logo.svg" alt="STK SERVICES" class="h-14 sm:h-20">
                </NuxtLink>
            </div>


            <div class="lg:w-3/6 md:w-4/6 flex justify-between">
                <div></div>

                <div class="sm:hidden">
                    <button @click="toggleMenu" type="button"
                        class="flex items-center text-gray-500 hover:text-white focus:text-white focus:outline-none">
                        <XIcon v-if="isOpen"
                            class="w-6 h-6 fill-current  transition-all duration-300 hover:transform hover:scale-2" />
                        <MenuIcon v-if="!isOpen" class="w-6 h-6 fill-current" />
                    </button>
                </div>

                <ul class="hidden sm:flex w-full items-center justify-between">
                    <li class="" v-for="(link, i) in links" :key="`navLink${i}`">
                        <NuxtLink :class="{
                            'is-active': $route.name == link.url
                        }" class="py-3 hover:font-bold hover:text-lg hover:relative hover:before:absolute hover:before:w-2/3 hover:before:h-2/3 hover:before:top-0 hover:before:letf-0 hover:before:border-t hover:before:border-l hover:before:border-blue-500 hover:before:border-solid hover:after:absolute hover:after:w-2/3 hover:after:h-2/3 hover:after:right-0 hover:after:bottom-0 hover:after:border-b hover:after:border-r hover:after:border-orange-500 hover:after:border-solid transition-all duration-500 hover:before:duration-500 hover:after:duration-500"
                            :to="link.url == 'index' ? '/' : link.url">
                            <span class="px-4">
                                {{ link.title }}
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div :class="isOpen ? 'block' : 'hidden'" class="transition-all duration-300">
        <ul class="flex flex-col items-center  w-full space-y-12 bg-zinc-50 py-8">
            <li class="" v-for="(link, i) in links" :key="`navLink${i}`">
                <NuxtLink @click="toggleMenu"
                    class="px-8 py-3 hover:font-bold hover:text-lg hover:relative hover:before:absolute hover:before:w-2/3 hover:before:h-2/3 hover:before:top-0 hover:before:letf-0 hover:before:border-t hover:before:border-l hover:before:border-blue-500 hover:before:border-solid hover:after:absolute hover:after:w-2/3 hover:after:h-2/3 hover:after:right-0 hover:after:bottom-0 hover:after:border-b hover:after:border-r hover:after:border-orange-500 hover:after:border-solid transition-all duration-500 hover:before:duration-500 hover:after:duration-500"
                    :to="link.url == 'index' ? '/' : link.url">
                    <span class="px-24 mx-auto">
                        {{ link.title }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { PhoneIcon, MailIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';

export interface Link {
    title: string;
    url: string;
}

const links: Link[] = [
    {
        title: 'Accueil',
        url: 'index',
    },
    {
        title: 'A Propos',
        url: 'about-us',
    },
    {
        title: 'Services',
        url: 'services',
    },
    {
        title: 'Portfolio',
        url: 'portfolio',
    },
    {
        title: 'Blog',
        url: 'blog',
    },
    {
        title: 'Contact',
        url: 'contact',
    },
];

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
}
</script>
