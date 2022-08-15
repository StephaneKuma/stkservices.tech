<template>
    <div>
        <Hero />

        <Content>
            <div class="flex items-center">
                <div class="md:w-1/2 w-full"></div>
                <div class="md:w-1/2 w-full">
                    <Card :btn="true" :right="true" :title="['Connaître des choses', 'intéressantes']"
                        subTitle="Qui suis-je" :description="description" link="about-us" linkTitle="Lire la suite" />
                </div>
            </div>
        </Content>

        <div class="h-1"></div>

        <Content>
            <div class="flex items-center">
                <div class="md:w-1/2 w-full">
                    <Card :btn="true" :right="false" :title="['Services que nous fournissions']" subTitle="Nos services"
                        :description="description" link="services" linkTitle="Voir plus" />
                </div>
                <div class="md:w-1/2 w-full"></div>
            </div>
        </Content>

        <div class="h-1"></div>

        <Content>
            <div class="flex items-center">
                <div class="md:w-1/2 w-full">
                    <Card :btn="false" :right="false" :title="['Nos récents travaux']" subTitle="étude de cas"
                        :description="description" link="#" linkTitle="" />
                </div>
                <div class="md:w-1/2 w-full flex justify-end">
                    <Button link="portfolio" linkTitle="voir plus" />
                </div>
            </div>
        </Content>

        <div class="h-1"></div>

        <Content>
            <div class="flex items-center">
                <div class="md:w-1/2 w-full"></div>
                <div class="md:w-1/2 w-full">
                    <Card :btn="true" :right="true" :title="['Ce que nous faisons', 'de mieux']" subTitle="Expertises"
                        :description="description" link="contact" linkTitle="Demandez un devis" />
                </div>
            </div>
        </Content>

        <CallToAction />
    </div>
</template>

<script setup lang="ts">
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam placerat rutrum turpis, sit amet hendrerit metus vulputate id.Nulla laoreet maximus feugiat consectetur.";
</script>
