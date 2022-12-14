<script setup>
import { useHead } from '#imports'
const props = defineProps({
  appName: {
    type: String,
    default: "STK"
  },
  version: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "Welcome to STK Services!"
  },
  readDocs: {
    type: String,
    default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework."
  },
  followTwitter: {
    type: String,
    default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips."
  },
  starGitHub: {
    type: String,
    default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source."
  }
})
useHead({
  title: `${ props.title }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, ;a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1;h4,h5{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
    }
  ]
})
</script>
<template>
    <div
        class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base">
        <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20">
            <div class="flex justify-between items-end col-span-3"><a href="https://v3.nuxtjs.org" target="_blank"
                    rel="noopener" class="nuxt-logo"><svg viewBox="0 0 221 65" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="w-40 text-black dark:text-white">
                        <g clip-path="url(#a)">
                            <path fill="currentColor"
                                d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z">
                            </path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z"
                                fill="#80EEC0"></path>
                            <path
                                d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z"
                                fill="#00DC82"></path>
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#fff" d="M0 0h221v65H0z"></path>
                            </clipPath>
                        </defs>
                    </svg> </a><a href="https://github.com/nuxt/framework/releases/tag/{{ version }}" target="_blank"
                    rel="noopener" class="flex justify-end pb-1 sm:pb-2" v-text="version" />
                <div class="spotlight-wrapper">
                    <div class="fixed z-10 left-0 right-0 spotlight"></div>
                </div>
            </div>
            <div class="col-span-3 rounded p-4 flex flex-col gradient-border">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="font-medium text-2xl">Get Started</h4><svg width="40" height="40" viewBox="0 0 40 40"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M29.4284 31.095C26.9278 33.5955 23.5364 35.0003 20.0001 35.0003C16.4637 35.0003 13.0723 33.5955 10.5717 31.095C8.07118 28.5944 6.66638 25.203 6.66638 21.6667C6.66638 18.1304 8.07118 14.7389 10.5717 12.2383C10.5717 12.2383 11.6667 15 15.0001 16.6667C15.0001 13.3333 15.8334 8.33333 19.9767 5C23.3334 8.33333 26.8167 9.62833 29.4267 12.2383C30.667 13.475 31.6506 14.9446 32.321 16.5626C32.9915 18.1806 33.3355 19.9152 33.3334 21.6667C33.3357 23.418 32.9919 25.1525 32.3218 26.7705C31.6516 28.3886 30.6683 29.8582 29.4284 31.095V31.095Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path
                            d="M16.465 26.8683C17.0456 27.4491 17.7604 27.878 18.5462 28.1169C19.3319 28.3559 20.1644 28.3976 20.9701 28.2385C21.7758 28.0793 22.5299 27.7241 23.1657 27.2043C23.8015 26.6845 24.2995 26.016 24.6157 25.2581C24.9318 24.5001 25.0564 23.6759 24.9784 22.8584C24.9004 22.0408 24.6222 21.2551 24.1684 20.5705C23.7146 19.886 23.0992 19.3238 22.3766 18.9336C21.6539 18.5434 20.8463 18.3373 20.025 18.3333L18.3333 23.3333H15C15 24.6133 15.4883 25.8933 16.465 26.8683Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </div>
                <p class="mb-2">Remove this welcome page by removing <a
                        class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold">&lt;NuxtWelcome /&gt;</a>
                    tag or creating an <a href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank"
                        rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold">app.vue</a>
                    file.</p>
            </div><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener"
                class="gradient-border cursor-pointer col-span-3 sm:col-span-1 p-4 flex flex-col"><svg width="40"
                    height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 10.4217C21.9467 9.12833 24.59 8.33333 27.5 8.33333C30.4117 8.33333 33.0533 9.12833 35 10.4217V32.0883C33.0533 30.795 30.4117 30 27.5 30C24.59 30 21.9467 30.795 20 32.0883M20 10.4217V32.0883V10.4217ZM20 10.4217C18.0533 9.12833 15.41 8.33333 12.5 8.33333C9.59 8.33333 6.94667 9.12833 5 10.4217V32.0883C6.94667 30.795 9.59 30 12.5 30C15.41 30 18.0533 30.795 20 32.0883V10.4217Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <rect x="23.3334" y="13.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor">
                    </rect>
                    <rect x="8.33337" y="13.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor">
                    </rect>
                    <rect x="8.33337" y="18.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor">
                    </rect>
                    <rect x="8.33337" y="23.3333" width="8.33333" height="1.66667" rx="0.833334" fill="currentColor">
                    </rect>
                    <rect x="23.3334" y="18.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor">
                    </rect>
                    <rect x="23.3334" y="23.3333" width="8.33334" height="1.66667" rx="0.833334" fill="currentColor">
                    </rect>
                </svg>
                <h5 class="font-semibold text-xl mt-4">Documentation</h5>
                <p class="mt-2" v-text="readDocs" />
            </a><a href="https://github.com/nuxt/framework" target="_blank" rel="noopener"
                class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col"><svg width="40"
                    height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20 3.33333C10.795 3.33333 3.33337 10.8067 3.33337 20.0283C3.33337 27.4033 8.10837 33.6617 14.7317 35.8683C15.565 36.0217 15.8684 35.5067 15.8684 35.0633C15.8684 34.6683 15.855 33.6167 15.8467 32.225C11.21 33.2333 10.2317 29.9867 10.2317 29.9867C9.47504 28.0567 8.38171 27.5433 8.38171 27.5433C6.86837 26.51 8.49671 26.53 8.49671 26.53C10.1684 26.6467 11.0484 28.25 11.0484 28.25C12.535 30.8 14.95 30.0633 15.8984 29.6367C16.0517 28.5583 16.4817 27.8233 16.9584 27.4067C13.2584 26.985 9.36671 25.5517 9.36671 19.155C9.36671 17.3333 10.0167 15.8417 11.0817 14.675C10.91 14.2533 10.3384 12.555 11.245 10.2583C11.245 10.2583 12.645 9.80833 15.8284 11.9683C17.188 11.5975 18.5908 11.4087 20 11.4067C21.4167 11.4133 22.8417 11.5983 24.1734 11.9683C27.355 9.80833 28.7517 10.2567 28.7517 10.2567C29.6617 12.555 29.0884 14.2533 28.9184 14.675C29.985 15.8417 30.6317 17.3333 30.6317 19.155C30.6317 25.5683 26.7334 26.98 23.0217 27.3933C23.62 27.9083 24.1517 28.9267 24.1517 30.485C24.1517 32.715 24.1317 34.5167 24.1317 35.0633C24.1317 35.51 24.4317 36.03 25.2784 35.8667C28.5972 34.7535 31.4823 32.6255 33.5258 29.7834C35.5694 26.9413 36.6681 23.5289 36.6667 20.0283C36.6667 10.8067 29.2034 3.33333 20 3.33333Z"
                        fill="currentColor"></path>
                </svg>
                <h5 class="font-semibold text-xl mt-4">GitHub</h5>
                <p class="mt-2" v-text="starGitHub" />
            </a><a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener"
                class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col"><svg width="40"
                    height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.8167 33.7557C26.395 33.7557 33.275 23.334 33.275 14.2973C33.275 14.0007 33.275 13.7057 33.255 13.414C34.5937 12.4449 35.7489 11.245 36.6667 9.87066C35.4185 10.424 34.0943 10.7869 32.7384 10.9473C34.1661 10.0924 35.2346 8.74791 35.745 7.164C34.4029 7.96048 32.9345 8.52188 31.4034 8.824C30.3724 7.72694 29.0084 7.00039 27.5228 6.75684C26.0371 6.51329 24.5126 6.76633 23.1852 7.47678C21.8579 8.18723 20.8018 9.31545 20.1805 10.6868C19.5592 12.0581 19.4073 13.596 19.7484 15.0623C17.0294 14.9261 14.3694 14.2195 11.9411 12.9886C9.51285 11.7577 7.37059 10.0299 5.65337 7.91733C4.7789 9.42267 4.51102 11.2047 4.90427 12.9006C5.29751 14.5965 6.32232 16.0788 7.77004 17.0457C6.68214 17.0142 5.61776 16.7215 4.66671 16.1923V16.279C4.66736 17.8578 5.21403 19.3878 6.21404 20.6096C7.21404 21.8313 8.60582 22.6696 10.1534 22.9823C9.14639 23.2569 8.08986 23.2968 7.06504 23.099C7.50198 24.4581 8.35284 25.6467 9.49859 26.4984C10.6443 27.35 12.0277 27.8223 13.455 27.849C12.0369 28.9633 10.413 29.7871 8.67625 30.2732C6.93948 30.7594 5.12391 30.8984 3.33337 30.6823C6.46105 32.6896 10.1004 33.7542 13.8167 33.749"
                        fill="currentColor"></path>
                </svg>
                <h5 class="font-semibold text-xl mt-4">Twitter</h5>
                <p class="mt-2" v-text="followTwitter" />
            </a>
        </div>
    </div>
</template>

<style scoped>
.spotlight {
    background: linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);
    filter: blur(20vh);
    height: 50vh;
    bottom: -40vh
}

.spotlight-wrapper {
    opacity: 0.5;
    transition: opacity 0.4s ease-in
}

.nuxt-logo:hover~.spotlight-wrapper {
    opacity: 0.95
}

.gradient-border {
    position: relative;
    border-radius: 0.5rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    width: 100%
}

@media (prefers-color-scheme: light) {
    .gradient-border {
        background-color: rgba(255, 255, 255, 0.3)
    }

    .gradient-border::before {
        background: linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)
    }
}

@media (prefers-color-scheme: dark) {
    .gradient-border {
        background-color: rgba(20, 20, 20, 0.3)
    }

    .gradient-border::before {
        background: linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)
    }
}

.gradient-border::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.5rem;
    padding: 2px;
    width: 100%;
    background-size: 400% auto;
    background-position: 0 0;
    opacity: 0.5;
    transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude
}

.gradient-border:hover::before {
    background-position: -50% 0;
    opacity: 1
}

*,
:before,
:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb
}

* {
    --tw-ring-inset: var(--tw-empty, );
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(14, 165, 233, .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000
}

:root {
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4
}

a {
    color: inherit;
    text-decoration: inherit
}

body {
    margin: 0;
    font-family: inherit;
    line-height: inherit
}

html {
    -webkit-text-size-adjust: 100%;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    line-height: 1.5
}

p,
h4,
h5 {
    margin: 0
}

h4,
h5 {
    font-size: inherit;
    font-weight: inherit
}

svg {
    display: block;
    /* vertical-align: middle */
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
}

.bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))
}

.rounded {
    border-radius: .25rem
}

.cursor-pointer {
    cursor: pointer
}

.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.grid {
    display: -ms-grid;
    display: grid
}

.flex-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
}

.place-content-center {
    place-content: center
}

.items-end {
    -webkit-box-align: end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end
}

.items-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.justify-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end
}

.justify-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center
}

.justify-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.font-sans {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"
}

.font-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}

.font-medium {
    font-weight: 500
}

.font-bold {
    font-weight: 700
}

.font-semibold {
    font-weight: 600
}

.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
}

.text-sm {
    font-size: .875rem;
    line-height: 1.25rem
}

.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem
}

.mb-2 {
    margin-bottom: .5rem
}

.mb-4 {
    margin-bottom: 1rem
}

.mt-4 {
    margin-top: 1rem
}

.mt-2 {
    margin-top: .5rem
}

.max-w-5xl {
    max-width: 64rem
}

.min-h-screen {
    min-height: 100vh
}

.p-4 {
    padding: 1rem
}

.p-8 {
    padding: 2rem
}

.p-1 {
    padding: .25rem
}

.pb-1 {
    padding-bottom: .25rem
}

.fixed {
    position: fixed
}

.left-0 {
    left: 0px
}

.right-0 {
    right: 0px
}

.text-black {
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity))
}

.antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.w-full {
    width: 100%
}

.w-40 {
    width: 10rem
}

.z-10 {
    z-index: 10
}

.z-20 {
    z-index: 20
}

.gap-4 {
    grid-gap: 1rem;
    gap: 1rem
}

.grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
}

.col-span-3 {
    -ms-grid-column-span: span 3 / span 3;
    grid-column: span 3 / span 3
}

@media (min-width: 640px) {
    .sm\:text-base {
        font-size: 1rem;
        line-height: 1.5rem
    }

    .sm\:pb-2 {
        padding-bottom: .5rem
    }

    .sm\:col-span-1 {
        -ms-grid-column-span: span 1 / span 1;
        grid-column: span 1 / span 1
    }
}

@media (min-width: 768px) {
    .md\:gap-8 {
        grid-gap: 2rem;
        gap: 2rem
    }
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-black {
        --tw-bg-opacity: 1;
        background-color: rgba(0, 0, 0, var(--tw-bg-opacity))
    }

    .dark\:bg-white\/10 {
        --tw-bg-opacity: .1;
        background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
    }

    .dark\:text-white {
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity))
    }
}
</style>
