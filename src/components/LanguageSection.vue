<template>
    <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
        <div class="row">
            <div class="sm:tw-px-10">
                <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">12.</span><span
                    class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Languages</span>
            </div>
            <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
        </div>

        <div class="tw-mt-16 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 lg:tw-mx-10 tw-max-w-4xl">

            <div data-aos="fade-up" data-aos-delay="100"
                class="tw-flex tw-items-center tw-bg-gray-800 tw-rounded-lg tw-p-6 tw-border tw-border-gray-700 hover:tw-border-primary-text-color tw-transition-colors">
                <div class="tw-bg-primary-text-color tw-bg-opacity-20 tw-p-4 tw-rounded-full tw-mr-6">
                    <q-icon name="chat_bubble_outline" size="md" class="tw-text-primary-text-color" />
                </div>
                <div>
                    <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-1">English</h3>
                    <p class="tw-text-gray-400 tw-text-sm tw-font-mono">Bilingual Proficiency (C2)</p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200"
                class="tw-flex tw-items-center tw-bg-gray-800 tw-rounded-lg tw-p-6 tw-border tw-border-gray-700 hover:tw-border-primary-text-color tw-transition-colors">
                <div class="tw-bg-primary-text-color tw-bg-opacity-20 tw-p-4 tw-rounded-full tw-mr-6">
                    <q-icon name="record_voice_over" size="md" class="tw-text-primary-text-color" />
                </div>
                <div>
                    <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-1">Hausa</h3>
                    <p class="tw-text-gray-400 tw-text-sm tw-font-mono">Native</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LanguageSection",
    setup() {
        return {}
    }
})
</script>
