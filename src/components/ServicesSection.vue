<template>
    <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
        <div class="row">
            <div class="sm:tw-px-10">
                <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">05.</span><span
                    class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">What I Offer</span>
            </div>
            <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
        </div>

        <div class="tw-mt-16 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 lg:tw-mx-10">

            <!-- Consulting -->
            <div data-aos="zoom-in" data-aos-delay="100"
                class="tw-bg-projects-bg-color tw-rounded-lg tw-p-8 hover:tw--translate-y-2 tw-transition-transform tw-duration-300 tw-border tw-border-gray-800 hover:tw-border-primary-text-color shadow-9">
                <div class="tw-text-primary-text-color tw-mb-6">
                    <q-icon name="architecture" size="xl" />
                </div>
                <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-4">Architecture Consulting</h3>
                <p class="tw-text-gray-400 tw-text-base tw-leading-relaxed">
                    Evaluating existing systems and designing highly scalable, cloud-native architectures. I focus on
                    optimizing performance, removing bottlenecks, and implementing zero-trust security for complex
                    platforms.
                </p>
            </div>

            <!-- MVP Development -->
            <div data-aos="zoom-in" data-aos-delay="200"
                class="tw-bg-projects-bg-color tw-rounded-lg tw-p-8 hover:tw--translate-y-2 tw-transition-transform tw-duration-300 tw-border tw-border-gray-800 hover:tw-border-primary-text-color shadow-9">
                <div class="tw-text-primary-text-color tw-mb-6">
                    <q-icon name="rocket_launch" size="xl" />
                </div>
                <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-4">MVP Development</h3>
                <p class="tw-text-gray-400 tw-text-base tw-leading-relaxed">
                    Taking ambitious startups from zero to a fully functional product. Working autonomously or as a tech
                    lead to build fast, secure, and production-ready applications that can rapidly onboard thousands of
                    users.
                </p>
            </div>

            <!-- Team Leadership -->
            <div data-aos="zoom-in" data-aos-delay="300"
                class="tw-bg-projects-bg-color tw-rounded-lg tw-p-8 hover:tw--translate-y-2 tw-transition-transform tw-duration-300 tw-border tw-border-gray-800 hover:tw-border-primary-text-color shadow-9">
                <div class="tw-text-primary-text-color tw-mb-6">
                    <q-icon name="groups" size="xl" />
                </div>
                <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-4">Team Augmentation</h3>
                <p class="tw-text-gray-400 tw-text-base tw-leading-relaxed">
                    Stepping in to lead and upscale existing backend and frontend engineering teams. Conducting rigorous
                    code reviews, mentoring juniors, and enforcing industry best practices and agile methodologies.
                </p>
            </div>

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ServicesSection",
    setup() {
        return {}
    }
})
</script>
