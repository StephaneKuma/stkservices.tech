<template>
    <div>
        <Hero />

        <Content>
            <div class="flex flex-col sm:flex-row items-center">
                <div class="md:w-1/2 w-full">
                    <div class="bg-gray-400 w-full h-96 rounded-lg"></div>
                </div>
                <div class="md:w-1/2 w-full mt-8 sm:mt-0">
                    <Card :btn="true" :right="true" :title="['Connaître des choses', 'intéressantes']"
                        subTitle="Qui suis-je" :description="description" link="about-us" linkTitle="Lire la suite" />
                </div>
            </div>
        </Content>

        <div class="h-1"></div>

        <Content>
            <div class="sm:block lg:flex justify-center items-center">
                <div class="sm:w-full lg:w-1/2">
                    <Card class="sm:hidden lg:block" :btn="true" :right="false" :title="['Services que nous fournissions']" subTitle="Nos services"
                        :description="description" link="services" linkTitle="Voir plus" />

                    <div class="hidden lg:hidden sm:flex flex-row justify-center items-center">
                        <div class="sm:w-5/6">
                            <Card :btn="false" :right="false" :title="['Services que nous fournissions']"
                                subTitle="Nos services" :description="description" link="services"
                                linkTitle="Voir plus" />
                        </div>
                        <div class="sm:w-1/6 w-full flex justify-end mt-8 sm:mt-0">
                            <Button :isLink="true" link="services" linkTitle="voir plus" />
                        </div>
                    </div>
                </div>
                <!-- <div class="sm:w-full md:w-1/2 sm:grid sm:grid-cols-2 sm:gap-8 justify-center items-center hidden">
                    <ServiceItem title="Développement d'applications"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                    <div class="lg:grid lg:grid-cols-1 lg:gap-8 justify-center items-center">
                        <ServiceItem title="Hébergement & nom de domaine"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                        <ServiceItem title="Formations"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                    </div>
                </div> -->
                <div class="sm:w-full lg:w-1/2 sm:grid sm:grid-cols-3 lg:grid-cols-2 sm:gap-8 sm:justify-center sm:items-start lg:items-center sm:mt-8 hidden">
                    <ServiceItem title="Développement d'applications"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                    <ServiceItem class="lg:hidden" title="Hébergement & nom de domaine"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                    <ServiceItem class="lg:hidden" title="Formations"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />

                    <div class="lg:grid lg:grid-cols-1 lg:gap-8 justify-center items-center sm:hidden">
                        <ServiceItem title="Hébergement & nom de domaine"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                        <ServiceItem title="Formations"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                    </div>
                </div>
                <!-- <div class="lg:hidden md:grid md:grid-cols-3 sm:grid-cols-1 gap-8 mt-8"> -->
                <div class="grid grid-cols-1 gap-8 mt-8 sm:hidden">
                    <ServiceItem title="Développement d'applications"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />

                    <ServiceItem title="Hébergement & nom de domaine"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />

                    <ServiceItem title="Formations"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis." />
                </div>
            </div>
        </Content>

        <div class="h-1"></div>

        <Content>
            <div class="flex flex-col sm:flex-row items-center">
                <div class="sm:w-5/6 w-full">
                    <Card :btn="false" :right="false" :title="['Nos récents travaux']" subTitle="étude de cas"
                        :description="description" link="#" linkTitle="" />
                </div>
                <div class="sm:w-1/6 w-full flex justify-end mt-8 sm:mt-0">
                    <Button :isLink="true" link="portfolio" linkTitle="voir plus" />
                </div>
            </div>
            <div class="mt-8 w-full">
                <WorksCarousel />
            </div>
        </Content>

        <Content>
            <div class="flex flex-col sm:flex-row items-center">
                <div class="md:w-1/2 w-full">
                    <div class="bg-gray-400 w-full h-96 rounded-lg"></div>
                </div>
                <div class="md:w-1/2 w-full mt-8 sm:mt-0">
                    <Card :btn="true" :right="true" :title="['Ce que nous faisons', 'de mieux']" subTitle="Expertises"
                        :description="description" link="contact" linkTitle="Demandez un devis" />
                </div>
            </div>
        </Content>

        <Companies />

        <Content>
            <div class="flex flex-col-reverse sm:flex-row items-center">
                <div class="md:w-1/2 w-full mt-8 sm:mt-0">
                    <Awards />
                </div>
                <div class="md:w-1/2 w-full">
                    <Card :btn="true" :right="true" :title="['Ce que nous avons réalisé']" subTitle="Sommaire"
                        :description="description" link="contact" linkTitle="Demandez un devis" />
                </div>
            </div>
        </Content>

        <Content>
            <Hosting />
        </Content>

        <Content>
            <LastPosts />
        </Content>

        <CallToAction />
    </div>
</template>

<script setup lang="ts">
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam placerat rutrum turpis, sit amet hendrerit metus vulputate id.Nulla laoreet maximus feugiat consectetur.";
</script>
