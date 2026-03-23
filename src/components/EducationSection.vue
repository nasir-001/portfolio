<template>
    <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
        <div class="row">
            <div class="sm:tw-px-10">
                <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">11.</span><span
                    class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Education</span>
            </div>
            <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
        </div>

        <div class="tw-mt-12 tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 lg:tw-mx-10 w-full">
            <!-- B.Sc Degree -->
            <div data-aos="fade-up" class="tw-w-full lg:tw-w-1/2 tw-relative tw-z-10">
                <div class="tw-text-left mt-6 sm:-tw-mt-0">
                    <div class="tw-text-2xl sm:tw-text-3xl tw-font-medium tw-text-white sm:tw-pt-3">
                        Ahmadu Bello University
                    </div>
                    <div class="tw-text-lg tw-text-gray-400 tw-mt-1">
                        B.Sc. in Computer Science
                    </div>
                </div>
                <div
                    class="tw-bg-projects-bg-color tw-w-full tw-p-5 lg:tw-p-8 tw-text-gray-400 tw-text-base tw-font-light tw-mt-6 tw-relative tw-rounded-md shadow-9 tw-z-20">
                    Advanced studies in software engineering, operating systems, artificial intelligence, and database
                    management. Deepened my theoretical knowledge and practical application of computer science
                    principles to build complex, scalable systems.
                </div>
                <div class="tw-pt-4 tw-text-sm tw-text-gray-400 tw-font-mono tw-text-left">
                    Kaduna, Nigeria
                </div>
            </div>

            <!-- Diploma -->
            <div data-aos="fade-up" data-aos-delay="100" class="tw-w-full lg:tw-w-1/2 tw-relative tw-z-10">
                <div class="tw-text-left mt-6 sm:-tw-mt-0">
                    <div class="tw-text-2xl sm:tw-text-3xl tw-font-medium tw-text-white sm:tw-pt-3">
                        Ahmadu Bello University
                    </div>
                    <div class="tw-text-lg tw-text-gray-400 tw-mt-1">
                        Diploma in Computer Science
                    </div>
                </div>
                <div
                    class="tw-bg-projects-bg-color tw-w-full tw-p-5 lg:tw-p-8 tw-text-gray-400 tw-text-base tw-font-light tw-mt-6 tw-relative tw-rounded-md shadow-9 tw-z-20">
                    Completed a foundational program focusing on software development principles, data structures,
                    algorithms, and practical programming applications. This program laid the groundwork for my career
                    in full-stack engineering.
                </div>
                <div class="tw-pt-4 tw-text-sm tw-text-gray-400 tw-font-mono tw-text-left">
                    Kaduna, Nigeria
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "EducationSection",
    setup() {
        return {}
    }
})
</script>
