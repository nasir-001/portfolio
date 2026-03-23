<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">08.</span><span
          class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Selected Work</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>

    <div class="tw-mt-12 lg:tw-mx-10 tw-grid tw-grid-cols-1 xl:tw-grid-cols-12 tw-gap-8">
      <div data-aos="fade-right"
        class="xl:tw-col-span-4 tw-rounded-2xl tw-border tw-border-gray-800 tw-bg-projects-bg-color tw-p-8 tw-h-fit">
        <div class="tw-text-xs tw-font-mono tw-tracking-[0.3em] tw-uppercase tw-text-primary-text-color">
          No Image Gallery
        </div>
        <h3 class="tw-mt-4 tw-text-3xl tw-leading-tight tw-text-white">
          A clearer view of the products and systems I have shipped.
        </h3>
        <p class="tw-mt-5 tw-text-base tw-leading-relaxed tw-text-gray-400">
          Instead of screenshots, this section highlights the kind of work behind the interface: secure platforms,
          real-time products, SaaS applications, and operational systems built for actual use.
        </p>

        <div class="tw-mt-8 tw-space-y-4">
          <div class="tw-border-l-2 tw-border-primary-text-color tw-pl-4">
            <div class="tw-text-sm tw-font-mono tw-text-primary-text-color">Focus</div>
            <div class="tw-mt-1 tw-text-sm tw-text-gray-400">Execution, architecture, and product delivery.</div>
          </div>
          <div class="tw-border-l-2 tw-border-gray-700 tw-pl-4">
            <div class="tw-text-sm tw-font-mono tw-text-primary-text-color">Coverage</div>
            <div class="tw-mt-1 tw-text-sm tw-text-gray-400">Web, backend systems, mobile touchpoints, and cloud infrastructure.</div>
          </div>
          <div class="tw-border-l-2 tw-border-gray-700 tw-pl-4">
            <div class="tw-text-sm tw-font-mono tw-text-primary-text-color">Approach</div>
            <div class="tw-mt-1 tw-text-sm tw-text-gray-400">Build what scales, keep it maintainable, and ship with strong product judgment.</div>
          </div>
        </div>
      </div>

      <div class="xl:tw-col-span-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
        <article v-for="(item, index) in highlights" :key="item.title" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"
          class="tw-group tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-gray-800 tw-bg-gray-800/60 tw-p-6 tw-transition-all tw-duration-300 hover:tw--translate-y-1 hover:tw-border-primary-text-color">
          <div class="tw-flex tw-items-center tw-justify-between tw-gap-4">
            <div class="tw-text-xs tw-font-mono tw-tracking-[0.3em] tw-uppercase tw-text-primary-text-color">
              0{{ index + 1 }}
            </div>
            <div class="tw-text-xs tw-uppercase tw-tracking-[0.25em] tw-text-gray-500">
              {{ item.eyebrow }}
            </div>
          </div>

          <h4 class="tw-mt-5 tw-text-2xl tw-font-medium tw-text-white">
            {{ item.title }}
          </h4>
          <p class="tw-mt-4 tw-text-base tw-leading-relaxed tw-text-gray-400">
            {{ item.description }}
          </p>

          <div class="tw-mt-6 tw-border-t tw-border-gray-800 tw-pt-4">
            <div class="tw-text-xs tw-font-mono tw-uppercase tw-tracking-[0.25em] tw-text-gray-500">
              Selected Examples
            </div>
            <div class="tw-mt-2 tw-text-sm tw-leading-relaxed tw-text-gray-300">
              {{ item.examples }}
            </div>
          </div>

          <div class="tw-mt-5 tw-flex tw-flex-wrap tw-gap-2">
            <span v-for="tag in item.tags" :key="tag"
              class="tw-rounded-full tw-border tw-border-gray-700 tw-px-3 tw-py-1 tw-text-xs tw-font-mono tw-text-primary-text-color">
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const highlights = [
  {
    title: 'Digital Identity & Security',
    eyebrow: 'Secure Systems',
    description: 'Built platforms where trust, verification, and visibility were product requirements from day one, not features added later.',
    examples: 'Cloud-Eye, Singer AI, and secure proctoring infrastructure for ABUDLC.',
    tags: ['Zero-Trust', 'Monitoring', 'Python']
  },
  {
    title: 'Real-Time Products',
    eyebrow: 'Communication',
    description: 'Delivered messaging, wallet, and market experiences with architecture shaped around low-latency communication and continuous activity.',
    examples: 'Abaaly Chat, Abaaly Wallet, and multi-service super app workflows.',
    tags: ['WebSocket', 'WebRTC', 'Payments']
  },
  {
    title: 'SaaS Frontends',
    eyebrow: 'Product UI',
    description: 'Designed and shipped responsive interfaces backed by reusable components, strong usability standards, and maintainable frontend architecture.',
    examples: 'SaaS work across Alhytham, Dyfuso, and internal business dashboards.',
    tags: ['React', 'Next.js', 'Vue.js']
  },
  {
    title: 'Education Platforms',
    eyebrow: 'EdTech',
    description: 'Built systems for learning, assessment, and administration where reliability and clarity directly affect user outcomes.',
    examples: 'Eduvacity, ABUDLC exam systems, and structured student-facing workflows.',
    tags: ['EdTech', 'Assessments', 'Dashboards']
  },
  {
    title: 'Commerce & Ordering',
    eyebrow: 'Transactions',
    description: 'Worked on product flows that connect discovery, checkout, and operations without adding unnecessary friction to the customer journey.',
    examples: 'KUUKA ordering flows, market features, and payment-connected product experiences.',
    tags: ['Checkout', 'APIs', 'Operations']
  },
  {
    title: 'Internal Tools & Admin Systems',
    eyebrow: 'Operations',
    description: 'Built practical systems that help teams manage users, workflows, reporting, and day-to-day operational decisions.',
    examples: 'Alumni systems, admin dashboards, and business process tools used behind the scenes.',
    tags: ['Admin Tools', 'Reporting', 'Workflows']
  }
]

export default defineComponent({
  name: 'WorkHighlightsSection',
  setup() {
    return {
      highlights
    }
  }
})
</script>
