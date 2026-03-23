<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">03.</span><span
          class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Featured Projects</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>

    <div class="tw-mt-12 tw-flex tw-flex-col tw-gap-16 lg:tw-mx-10 tw-max-w-4xl tw-mx-auto">

      <!-- Cloud-Eye Project -->
      <div data-aos="fade-up" class="tw-group tw-relative tw-pl-6 sm:tw-pl-10">
        <!-- Vertical Accent Line -->
        <div
          class="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-px tw-bg-gray-800 group-hover:tw-bg-primary-text-color tw-transition-colors tw-duration-500">
        </div>

        <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <h3
            class="tw-text-2xl sm:tw-text-4xl tw-font-bold tw-text-white group-hover:tw-text-primary-text-color tw-transition-colors tw-duration-300 tw-cursor-pointer">
            Cloud-Eye
          </h3>
          <div class="tw-h-px tw-flex-grow tw-bg-gray-800 tw-mx-6 group-hover:tw-bg-gray-700 tw-transition-colors">
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer"
            class="tw-text-gray-400 group-hover:tw-text-white tw-transition-colors">
            <q-icon name="launch" size="sm" />
          </a>
        </div>

        <p class="tw-text-gray-400 tw-text-lg tw-font-light tw-leading-relaxed tw-mb-6 tw-max-w-3xl">
          A comprehensive digital identity and monitoring platform. Architected and developed from the ground up,
          taking full ownership of the end-to-end lifecycle from technical design to deployment. Ensures secure
          verification and sophisticated system operations.
        </p>

        <div class="tw-flex tw-flex-wrap tw-gap-x-6 tw-gap-y-2 tw-text-sm tw-text-primary-text-color tw-font-mono">
          <span>Python</span>
          <span>Vue.js</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>AWS</span>
        </div>
      </div>

      <!-- Abaaly Project -->
      <div data-aos="fade-up" class="tw-group tw-relative tw-pl-6 sm:tw-pl-10">
        <div
          class="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-px tw-bg-gray-800 group-hover:tw-bg-primary-text-color tw-transition-colors tw-duration-500">
        </div>

        <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <h3
            class="tw-text-2xl sm:tw-text-4xl tw-font-bold tw-text-white group-hover:tw-text-primary-text-color tw-transition-colors tw-duration-300 tw-cursor-pointer tw-whitespace-nowrap">
            Abaaly (Super App)
          </h3>
          <div class="tw-h-px tw-flex-grow tw-bg-gray-800 tw-mx-6 group-hover:tw-bg-gray-700 tw-transition-colors">
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer"
            class="tw-text-gray-400 group-hover:tw-text-white tw-transition-colors">
            <q-icon name="launch" size="sm" />
          </a>
        </div>

        <p class="tw-text-gray-400 tw-text-lg tw-font-light tw-leading-relaxed tw-mb-6 tw-max-w-3xl">
          Nigeria’s premier all-in-one super app integrating multifaceted features including Abaaly Chat (secure
          messaging, voice/video calls), Abaaly Market (e-commerce), and Abaaly Wallet (digital payments and bills).
          Features highly scalable, cloud-native architecture.
        </p>

        <div class="tw-flex tw-flex-wrap tw-gap-x-6 tw-gap-y-2 tw-text-sm tw-text-primary-text-color tw-font-mono">
          <span>Node.js</span>
          <span>Vue.js</span>
          <span>WebSocket</span>
          <span>WebRTC</span>
          <span>Tailwindcss</span>
        </div>
      </div>

      <!-- Singer AI Project -->
      <div data-aos="fade-up" class="tw-group tw-relative tw-pl-6 sm:tw-pl-10">
        <div
          class="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-px tw-bg-gray-800 group-hover:tw-bg-primary-text-color tw-transition-colors tw-duration-500">
        </div>

        <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <h3
            class="tw-text-2xl sm:tw-text-4xl tw-font-bold tw-text-white group-hover:tw-text-primary-text-color tw-transition-colors tw-duration-300 tw-cursor-pointer tw-whitespace-nowrap">
            Singer AI
          </h3>
          <div class="tw-h-px tw-flex-grow tw-bg-gray-800 tw-mx-6 group-hover:tw-bg-gray-700 tw-transition-colors">
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer"
            class="tw-text-gray-400 group-hover:tw-text-white tw-transition-colors">
            <q-icon name="launch" size="sm" />
          </a>
        </div>

        <p class="tw-text-gray-400 tw-text-lg tw-font-light tw-leading-relaxed tw-mb-6 tw-max-w-3xl">
          A next-generation AI-driven cybersecurity framework focused on autonomous vulnerability hunting and adaptive
          system defense. Integrates advanced AI models to predict and mitigate potential cyber threats in real-time.
        </p>

        <div class="tw-flex tw-flex-wrap tw-gap-x-6 tw-gap-y-2 tw-text-sm tw-text-primary-text-color tw-font-mono">
          <span>Python</span>
          <span>FastAPI</span>
          <span>Docker</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ProjectsSection",
  setup() {

  },
})
</script>

<style scoped>
.step:hover {
  transform: translateY(-5%);
}

.step {
  transition: all ease 900ms;
}
</style>
