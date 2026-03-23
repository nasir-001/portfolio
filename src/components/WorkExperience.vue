<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-4 sm:tw-px-5">
    <div class="row -tw-ml-4 sm:-tw-ml-0">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">02.</span><span
          class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Working Experience</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>
    <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap lg:tw-ml-10 tw-mt-12 tw-text-gray-300 tw-relative tw-pr-12">
      <div
        class="tw-flex tw-w-full tw-border-b-2 sm:tw-border-b-0 tw-justify-evenly sm:tw-block sm:tw-border-l-2 tw-border-gray-700 sm:tw-w-36 lg:tw-w-56 tw-h-full">
        <div
          :class="selected == 'deterrence' ? 'tw-border-b-2 sm:tw-border-b-0 sm:tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''"
          class="lg:tw-pl-6 sm:tw-pl-4 tw-w-1/5 sm:tw-w-full tw-text-center sm:tw-text-left title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-sm sm:tw-text-lg hover:tw-text-primary-text-color -tw-mb-0.5 sm:-tw-ml-0.5"
          @click="selectTab('deterrence')">
          Deterrence
        </div>
        <div
          :class="selected == 'aspacelife' ? 'tw-border-b-2 sm:tw-border-b-0 sm:tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''"
          class="lg:tw-pl-6 sm:tw-pl-4 tw-w-1/5 sm:tw-w-full tw-text-center sm:tw-text-left title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-sm sm:tw-text-lg hover:tw-text-primary-text-color -tw-mb-0.5 sm:-tw-ml-0.5"
          @click="selectTab('aspacelife')">
          Aspacelife
        </div>
        <div
          :class="selected == 'alhytham' ? 'tw-border-b-2 sm:tw-border-b-0 sm:tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''"
          class="lg:tw-pl-6 sm:tw-pl-4 tw-w-1/5 sm:tw-w-full tw-text-center sm:tw-text-left title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-sm sm:tw-text-lg hover:tw-text-primary-text-color -tw-mb-0.5 sm:-tw-ml-0.5"
          @click="selectTab('alhytham')">
          Alhytham
        </div>
        <div
          :class="selected == 'dyfuso' ? 'tw-border-b-2 sm:tw-border-b-0 sm:tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''"
          class="lg:tw-pl-6 sm:tw-pl-4 tw-w-1/5 sm:tw-w-full tw-text-center sm:tw-text-left title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-sm sm:tw-text-lg hover:tw-text-primary-text-color -tw-mb-0.5 sm:-tw-ml-0.5"
          @click="selectTab('dyfuso')">
          Dyfuso
        </div>
        <div
          :class="selected == 'bexils' ? 'tw-border-b-2 sm:tw-border-b-0 sm:tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''"
          class="lg:tw-pl-6 sm:tw-pl-4 tw-w-1/5 sm:tw-w-full tw-text-center sm:tw-text-left title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-sm sm:tw-text-lg hover:tw-text-primary-text-color -tw-mb-0.5 sm:-tw-ml-0.5"
          @click="selectTab('bexils')">
          Bexils
        </div>
      </div>

      <!-- Deterrence -->
      <div data-aos="fade" v-if="selected == 'deterrence'"
        class="lg:tw-ml-8 tw-mt-8 sm:tw-mt-0 tw-flex-1 tw-pr-6 md:tw-pr-24 lg:tw-pr-40 xl:tw-pr-48">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Software Engineer <span class="title tw-text-primary-text-color">@Deterrence NG</span>
          </div>
          <div class="tw-text-base tw-text-gray-400 tw-mt-2">Aug 2023 - Jan 2026</div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                <strong>Cloud-Eye Development:</strong> Single-handedly architected and developed Cloud-Eye, a
                comprehensive digital identity and monitoring platform, taking full ownership of the end-to-end
                lifecycle.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                <strong>Singer AI:</strong> Contributed to the engineering of a next-generation AI-driven cybersecurity
                framework focused on autonomous vulnerability hunting and adaptive system defense.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                <strong>Proctored Exam System (ABUDLC):</strong> Designed and built a secure, scalable proctoring exam
                system ensuring academic integrity for thousands of remote students.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Aspacelife -->
      <div data-aos="fade" v-if="selected == 'aspacelife'"
        class="lg:tw-ml-8 tw-mt-8 sm:tw-mt-0 tw-flex-1 tw-pr-6 md:tw-pr-24 lg:tw-pr-40 xl:tw-pr-48">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Head of Web Department <span class="title tw-text-primary-text-color">@Aspacelife Technology</span>
          </div>
          <div class="tw-text-base tw-text-gray-400 tw-mt-2">Feb 2023 - Jan 2025</div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                <strong>Abaaly (African First Super App):</strong> Spearheaded the development of Nigeria’s premier
                all-in-one app,
                integrating Abaaly Chat, Abaaly Market, and Abaaly Wallet.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Coordinated cross-functional engineering teams to ensure seamless integration of mobile and web
                components, enforcing highly scalable, cloud-native architecture.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Collaborated closely with backend engineers to integrate secure payment gateways and optimize real-time
                communication protocols using WebSocket and WebRTC.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alhytham -->
      <div data-aos="fade" v-if="selected == 'alhytham'"
        class="lg:tw-ml-8 tw-mt-8 sm:tw-mt-0 tw-flex-1 tw-pr-6 md:tw-pr-24 lg:tw-pr-40 xl:tw-pr-48">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Frontend Developer <span class="title tw-text-primary-text-color">@Alhytham</span>
          </div>
          <div class="tw-text-base tw-text-gray-400 tw-mt-2">Aug 2022 - Dec 2024</div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Architected and implemented dynamic, highly responsive user interfaces for SaaS products utilizing
                modern frontend frameworks including React.js, Next.js, and Vue.js.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Streamlined user interactions by designing intuitive workflows, maintaining a strict focus on usability,
                web accessibility standards, and cross-browser compatibility.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Actively drove agile product development life cycles by participating in sprint planning, technical
                discussions, and retrospectives.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dyfuso -->
      <div data-aos="fade" v-if="selected == 'dyfuso'"
        class="lg:tw-ml-8 tw-mt-8 sm:tw-mt-0 tw-flex-1 tw-pr-6 md:tw-pr-24 lg:tw-pr-40 xl:tw-pr-48">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Frontend Engineer <span class="title tw-text-primary-text-color">@Dyfuso</span>
          </div>
          <div class="tw-text-base tw-text-gray-400 tw-mt-2">Dec 2021 - June 2022</div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Supervised and mentored the frontend engineering team, systematically assigning tasks, conducting
                rigorous code reviews, and enforcing best practices.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Developed a robust library of reusable and testable UI components, highly reducing future development
                time and scaling application growth.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Championed continuous improvement initiatives through agile methodologies to optimize team delivery
                efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bexils -->
      <div data-aos="fade" v-if="selected == 'bexils'"
        class="lg:tw-ml-8 tw-mt-8 sm:tw-mt-0 tw-flex-1 tw-pr-6 md:tw-pr-24 lg:tw-pr-40 xl:tw-pr-48">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Fullstack Engineer <span class="title tw-text-primary-text-color">@Bexils</span>
          </div>
          <div class="tw-text-base tw-text-gray-400 tw-mt-2">Dec 2019 - May 2023</div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Collaborated with cross-functional product and engineering teams to define precise project requirements,
                design scalable system architectures, and implement high-impact technical solutions.
              </div>
            </div>
            <div class="tw-flex tw-items-start tw-ml-0.5 tw-mt-4">
              <svg class="tw-w-3 tw-mt-1.5 tw-flex-shrink-0 tw-text-primary-text-color tw-fill-current"
                viewBox="0 0 490 490">
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z" />
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-ml-4 tw-font-light">
                Delivered optimized, maintainable code features to support SaaS operations, working across the stack to
                ensure seamless performance.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "WorkExperience",
  setup() {
    const selected = ref('deterrence')

    const selectTab = (tabName) => {
      selected.value = tabName
    }

    return {
      selected,
      selectTab
    }
  },
})
</script>

<style scoped>
.title {
  transition: all ease 900ms;
}
</style>
