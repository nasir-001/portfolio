<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">06.</span><span
          class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">My Expertise</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>

    <div class="tw-mt-16 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 lg:tw-mx-10">

      <!-- Full-Stack Development -->
      <div data-aos="zoom-in" data-aos-delay="100"
        class="tw-bg-gray-800 tw-rounded-lg tw-p-8 hover:tw--translate-y-2 tw-transition-transform tw-duration-300 tw-border tw-border-gray-700 hover:tw-border-primary-text-color">
        <div class="tw-text-primary-text-color tw-mb-6">
          <q-icon name="code" size="xl" />
        </div>
        <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-4">Full-Stack Development</h3>
        <p class="tw-text-gray-400 tw-text-base tw-leading-relaxed">
          Architecting and building scalable web applications from end-to-end. Proficient in creating dynamic,
          responsive UIs with React/Vue and engineering robust backend systems with Node.js and Python (Django/FastAPI).
        </p>
        <div class="tw-mt-6 tw-flex tw-flex-wrap tw-gap-2">
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">React/Next.js</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">Vue/Nuxt</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">Node.js</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">Python</span>
        </div>
      </div>

      <!-- Database Architecture -->
      <div data-aos="zoom-in" data-aos-delay="200"
        class="tw-bg-gray-800 tw-rounded-lg tw-p-8 hover:tw--translate-y-2 tw-transition-transform tw-duration-300 tw-border tw-border-gray-700 hover:tw-border-primary-text-color">
        <div class="tw-text-primary-text-color tw-mb-6">
          <q-icon name="storage" size="xl" />
        </div>
        <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-4">Database Architecture</h3>
        <p class="tw-text-gray-400 tw-text-base tw-leading-relaxed">
          Designing and optimizing complex data structures for high-performance applications. Experienced in handling
          large-scale data with both relational and NoSQL databases to ensure integrity and ultra-low latency.
        </p>
        <div class="tw-mt-6 tw-flex tw-flex-wrap tw-gap-2">
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">PostgreSQL</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">MongoDB</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">ScyllaDB</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">CassandraDB</span>
        </div>
      </div>

      <!-- AI & Real-Time Systems -->
      <div data-aos="zoom-in" data-aos-delay="300"
        class="tw-bg-gray-800 tw-rounded-lg tw-p-8 hover:tw--translate-y-2 tw-transition-transform tw-duration-300 tw-border tw-border-gray-700 hover:tw-border-primary-text-color">
        <div class="tw-text-primary-text-color tw-mb-6">
          <q-icon name="psychology" size="xl" />
        </div>
        <h3 class="tw-text-2xl tw-text-white tw-font-medium tw-mb-4">AI & Real-Time Systems</h3>
        <p class="tw-text-gray-400 tw-text-base tw-leading-relaxed">
          Integrating next-generation AI models to power intelligent applications. Implementing highly optimized
          real-time communication protocols (WebSocket/WebRTC) for seamless data exchange and streaming.
        </p>
        <div class="tw-mt-6 tw-flex tw-flex-wrap tw-gap-2">
          <span class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">AI
            Integration</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">WebSockets</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">WebRTC</span>
          <span
            class="tw-text-xs tw-font-mono tw-text-primary-text-color tw-bg-gray-900 tw-px-2 tw-py-1 tw-rounded">XMPP</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ExpertiseSection",
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
