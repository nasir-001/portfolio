<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">09.</span><span
          class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Case Studies</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>

    <div class="tw-mt-6 lg:tw-mx-10 tw-max-w-6xl tw-text-gray-400 tw-text-base sm:tw-text-lg tw-leading-relaxed">
      A closer look at selected systems: the problem, my role, the technical direction, and the result that mattered.
    </div>

    <div class="tw-mt-12 lg:tw-mx-10 tw-space-y-8">
      <article v-for="(study, index) in caseStudies" :key="study.title" data-aos="fade-up"
        :data-aos-delay="(index + 1) * 100"
        class="tw-rounded-2xl tw-border tw-border-gray-800 tw-bg-projects-bg-color tw-p-6 md:tw-p-8 shadow-9">
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-6 lg:tw-gap-8">
          <div class="lg:tw-col-span-4">
            <div class="tw-text-xs tw-font-mono tw-uppercase tw-tracking-[0.3em] tw-text-primary-text-color">
              {{ study.category }}
            </div>
            <h3 class="tw-mt-4 tw-text-3xl tw-text-white">
              {{ study.title }}
            </h3>
            <div class="tw-mt-3 tw-text-sm tw-font-mono tw-text-gray-500">
              {{ study.role }}
            </div>
            <p class="tw-mt-5 tw-text-base tw-leading-relaxed tw-text-gray-400">
              {{ study.summary }}
            </p>

            <div class="tw-mt-6 tw-flex tw-flex-wrap tw-gap-2">
              <span v-for="tag in study.stack" :key="tag"
                class="tw-rounded-full tw-border tw-border-gray-700 tw-px-3 tw-py-1 tw-text-xs tw-font-mono tw-text-primary-text-color">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="lg:tw-col-span-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
            <div class="tw-rounded-xl tw-border tw-border-gray-800 tw-bg-gray-800/40 tw-p-5">
              <div class="tw-text-xs tw-font-mono tw-uppercase tw-tracking-[0.25em] tw-text-primary-text-color">
                Challenge
              </div>
              <p class="tw-mt-3 tw-text-sm tw-leading-relaxed tw-text-gray-300">
                {{ study.challenge }}
              </p>
            </div>
            <div class="tw-rounded-xl tw-border tw-border-gray-800 tw-bg-gray-800/40 tw-p-5">
              <div class="tw-text-xs tw-font-mono tw-uppercase tw-tracking-[0.25em] tw-text-primary-text-color">
                Approach
              </div>
              <p class="tw-mt-3 tw-text-sm tw-leading-relaxed tw-text-gray-300">
                {{ study.approach }}
              </p>
            </div>
            <div class="tw-rounded-xl tw-border tw-border-gray-800 tw-bg-gray-800/40 tw-p-5">
              <div class="tw-text-xs tw-font-mono tw-uppercase tw-tracking-[0.25em] tw-text-primary-text-color">
                Outcome
              </div>
              <p class="tw-mt-3 tw-text-sm tw-leading-relaxed tw-text-gray-300">
                {{ study.outcome }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const caseStudies = [
  {
    title: 'Cloud-Eye',
    category: 'Identity Platform',
    role: 'Software Engineer at Deterrence NG',
    summary: 'A digital identity and monitoring platform built with full ownership across architecture, implementation, and deployment.',
    challenge: 'The product needed to handle sensitive identity workflows and operational visibility without compromising security or maintainability.',
    approach: 'I architected and built the platform end-to-end, shaping the core data flows, verification logic, and cloud-ready deployment path.',
    outcome: 'Delivered a secure operational platform with a strong technical foundation for verification, monitoring, and long-term expansion.',
    stack: ['Python', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    title: 'Abaaly',
    category: 'Super App',
    role: 'Head of Web Department at Aspacelife Technology',
    summary: 'A multi-service product bringing messaging, commerce, and digital payments into one coordinated application experience.',
    challenge: 'The app needed to combine multiple complex user journeys while keeping real-time communication, payments, and team coordination stable.',
    approach: 'I led the web delivery effort, coordinated engineering collaboration across product surfaces, and supported real-time integration with WebSocket and WebRTC.',
    outcome: 'Helped drive a scalable super app architecture around three connected services: Chat, Market, and Wallet.',
    stack: ['Node.js', 'Vue.js', 'WebSocket', 'WebRTC', 'Tailwindcss']
  },
  {
    title: 'ABUDLC Proctored Exam System',
    category: 'Education Infrastructure',
    role: 'Software Engineer at Deterrence NG',
    summary: 'A secure proctoring system designed to protect assessment integrity for remote learners at scale.',
    challenge: 'Remote examinations required dependable proctoring workflows that could support large student participation without degrading trust in the process.',
    approach: 'I designed and built the system with security and scale in mind, focusing on reliability, controlled exam flows, and practical operational use.',
    outcome: 'Delivered a scalable exam platform that supports academic integrity for thousands of remote students.',
    stack: ['Secure Workflows', 'Scalable Backend', 'Operations']
  }
]

export default defineComponent({
  name: 'CaseStudiesSection',
  setup() {
    return {
      caseStudies
    }
  }
})
</script>
