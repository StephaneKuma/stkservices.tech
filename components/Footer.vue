<template>
    <div class="bg-blue-50 text-gray-600 w-full flex flex-col-reverse justify-items-end">
        <div class="bg-blue-800 text-white h-10 flex justify-center items-center">
            <span>Tous droits réservés @ stkservices 2022</span>
        </div>
        <div class="lg:px-24 px-12 py-20">
            <div class="lg:grid lg:grid-cols-4 lg:justify-center lg:items-start md:grid md:grid-cols-2 md:gap-8 md:justify-center sm:items-start">
                <div class="flex flex-col justify-center items-center">
                    <NuxtLink to="/">
                        <img src="logo.svg" alt="STK SERVICES" class="h-14 sm:h-20">
                    </NuxtLink>

                    <p class="text-center mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat, alias cumque debitis
                        atque aspernatur reiciendis placeat tenetur vitae fugiat.
                    </p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <h4 class="text-2xl mt-6 font-semibold capitalize">Liens rapides</h4>

                    <ul class="mt-4 space-y-3">
                        <li>
                            <NuxtLink>A propos</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Portfolio</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Blog</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Contact</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <h4 class="text-2xl mt-6 font-semibold capitalize">Derniers Travaux</h4>

                    <ul class="mt-4 space-y-3">
                        <li>
                            <NuxtLink>A propos</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Portfolio</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Blog</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Contact</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <h4 class="text-2xl mt-6 font-semibold capitalize">Newsletter</h4>

                    <form action="#" class="mt-4">
                        <div class="pt--8 pb-8">
                            <input type="email" name="email" id="email" placeholder="Entrer votre email"> <br>
                        </div>

                        <div class="flex lg:justify-start sm:justify-center">
                            <Button :isLink="false" linkTitle="S'abonner" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
