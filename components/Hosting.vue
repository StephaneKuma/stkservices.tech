<template>
    <div class="text-gray-500">
        <CenteredTitle title="Plan tarifaire" :subTitle="subTitle" />

        <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
            <HostingCard title="Basic" description="Lorem ipsum dolor sit amet." :price="60000" />
            <HostingCard :isStandard="true" title="Standard" description="Lorem ipsum dolor sit amet." :price="90000" />
            <HostingCard title="Premium" description="Lorem ipsum dolor sit amet." :price="120000" />
        </div>
    </div>
</template>

<script setup lang="ts">
const subTitle = "Hébergement & nom de dommine";
</script>
