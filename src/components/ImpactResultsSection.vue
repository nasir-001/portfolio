<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">10.</span><span
          class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Impact / Results</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>

    <div class="tw-mt-12 lg:tw-mx-10 tw-grid tw-grid-cols-1 xl:tw-grid-cols-12 tw-gap-8">
      <div data-aos="fade-right"
        class="xl:tw-col-span-4 tw-rounded-2xl tw-border tw-border-gray-800 tw-bg-projects-bg-color tw-p-8">
        <div class="tw-text-xs tw-font-mono tw-uppercase tw-tracking-[0.3em] tw-text-primary-text-color">
          Results
        </div>
        <h3 class="tw-mt-4 tw-text-3xl tw-leading-tight tw-text-white">
          Built across secure platforms, real-time products, and high-impact business systems.
        </h3>
        <p class="tw-mt-5 tw-text-base tw-leading-relaxed tw-text-gray-400">
          From digital identity infrastructure to super apps and education systems, the work reflects a mix of
          technical ownership, product delivery, and production-focused engineering.
        </p>

        <div class="tw-mt-8 tw-space-y-4">
          <div class="tw-border-l-2 tw-border-primary-text-color tw-pl-4">
            <div class="tw-text-sm tw-font-mono tw-text-primary-text-color">Breadth</div>
            <div class="tw-mt-1 tw-text-sm tw-text-gray-400">Security, SaaS, commerce, education, and real-time communication systems.</div>
          </div>
          <div class="tw-border-l-2 tw-border-gray-700 tw-pl-4">
            <div class="tw-text-sm tw-font-mono tw-text-primary-text-color">Ownership</div>
            <div class="tw-mt-1 tw-text-sm tw-text-gray-400">Hands-on delivery from architecture and implementation through release.</div>
          </div>
        </div>
      </div>

      <div class="xl:tw-col-span-8 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6">
        <div v-for="(metric, index) in metrics" :key="metric.label" data-aos="zoom-in" :data-aos-delay="(index + 1) * 100"
          class="tw-rounded-2xl tw-border tw-border-gray-800 tw-bg-gray-800/60 tw-p-6 hover:tw-border-primary-text-color tw-transition-colors">
          <div class="tw-text-4xl tw-font-semibold tw-text-white">
            {{ metric.value }}
          </div>
          <div class="tw-mt-3 tw-text-sm tw-font-mono tw-uppercase tw-tracking-[0.25em] tw-text-primary-text-color">
            {{ metric.label }}
          </div>
          <p class="tw-mt-4 tw-text-sm tw-leading-relaxed tw-text-gray-400">
            {{ metric.note }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const metrics = [
  {
    value: '7+',
    label: 'Years Building Products',
    note: 'Delivering full-stack applications, internal tools, and cloud-ready systems for real-world use.'
  },
  {
    value: '5',
    label: 'Teams And Companies',
    note: 'Worked across Bexils, Dyfuso, Alhytham, Aspacelife, and Deterrence in hands-on engineering roles.'
  },
  {
    value: '3',
    label: 'Core Abaaly Services',
    note: 'Helped shape a unified product experience across Chat, Market, and Wallet.'
  },
  {
    value: '1000s',
    label: 'Students Supported',
    note: 'Built secure exam workflows for ABUDLC with academic integrity and operational reliability in mind.'
  },
  {
    value: 'End-To-End',
    label: 'Cloud-Eye Ownership',
    note: 'Single-handedly architected and developed Cloud-Eye from technical direction through deployment.'
  },
  {
    value: 'Real-Time',
    label: 'Systems Delivered',
    note: 'Integrated WebSocket and WebRTC into product experiences that depend on live communication.'
  }
]

export default defineComponent({
  name: 'ImpactResultsSection',
  setup() {
    return {
      metrics
    }
  }
})
</script>
