<template>
    <div class="w-full py-20 text-gray-500 bg-gray-50">
        <CenteredTitle title="Ils nous ont fais confiance" subTitle="Nos clients" />

        <div class="flex justify-evenly">
            <template v-for="i in 6">
                <div class="h-10 w-1/12 bg-gray-400 rounded-md"></div>
            </template>
        </div>
    </div>
</template>
