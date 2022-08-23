<template>
    <div>
        <Bread bread="à propos de nous"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a viverra leo." />

        <Content>
            <div class="flex flex-col sm:flex-row-reverse items-center">
                <div class="md:w-1/2 w-full">
                    <div class="bg-gray-400 w-full h-96 rounded-lg"></div>
                </div>
                <div class="md:w-1/2 w-full mt-8 sm:mt-0">
                    <Card :btn="true" :title="['Qui sommes-nous']"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolorum consequatur, eos dolor dolore quae enim commodi animi fuga beatae sequi vel delectus officia explicabo iure sapiente odit nisi repudiandae!"
                        link="contact" linkTitle="Embauchez-nous" />
                </div>
            </div>
        </Content>

        <Content>
            <div class="flex flex-col sm:flex-row items-center">
                <div class="md:w-1/2 w-full">
                    <div class="bg-gray-400 w-full h-96 rounded-lg"></div>
                </div>
                <div class="md:w-1/2 md:ml-3 w-full mt-8 sm:mt-0">
                    <Card :right="true" :title="['ce que nous faisons de mieux']" />

                    <div class="mt-8 space-y-2">
                        <Skill label="PHP" :percentage="70" />
                        <Skill label="Laravel" :percentage="90" />
                        <Skill label="Flutter" :percentage="76" />
                        <Skill label="Python" :percentage="50" />
                        <Skill label="Django" :percentage="70" />
                    </div>

                    <div class="mt-8 flex justify-center md:justify-end">
                        <Button :isLink="true" link="contact" linkTitle="demandez un devis" />
                    </div>
                </div>
            </div>
        </Content>

        <Content>
            <CenteredTitle title="éducation" />
        </Content>

        <Content>
            <CenteredTitle title="notre parcours" />

            <Journey />
        </Content>

        <Content>
            <div class="flex flex-col items-center">
                <div class="w-full">
                    <Card :title="['Ce que nous avons réalisé']" subTitle="Sommaire"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste sit, rem minus debitis nostrum, maxime eveniet laborum ipsam autem molestiae quisquam illo quis esse error! Nobis nostrum accusamus labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste sit, rem minus debitis nostrum, maxime eveniet laborum ipsam autem molestiae quisquam illo quis esse error! Nobis nostrum accusamus labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum iste sit, rem minus debitis nostrum, maxime eveniet laborum ipsam autem molestiae quisquam illo quis esse error! Nobis nostrum accusamus labore."
                        link="contact" linkTitle="Demandez un devis" />
                </div>

                <div class="w-full mt-8">
                    <Awards />
                </div>
            </div>
        </Content>

        <CallToAction />
    </div>
</template>

<script setup lang="ts">

</script>
