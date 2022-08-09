<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 sm:tw-px-5">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">02.</span><span class="tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Working Experience</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>
    <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap lg:tw-ml-10 tw-mt-12 tw-text-gray-300 tw-relative">
      <div class="tw-border-l-2 tw-border-gray-700 tw-w-36 lg:tw-w-44 tw-h-full">
        <div :class="selected == 'bexil' ? 'tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''" class="lg:tw-pl-6 tw-pl-4 title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-lg hover:tw-text-primary-text-color -tw-ml-0.5" @click="selectBexil">
          Bexil
        </div>
        <div :class="selected == 'dyfuso' ? 'tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''" class="lg:tw-pl-6 tw-pl-4 title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-lg hover:tw-text-primary-text-color -tw-ml-0.5" @click="selectKuuka">
          Dyfuso
        </div>
        <div :class="selected == 'eduvacity' ? 'tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''" class="lg:tw-pl-6 tw-pl-4 title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-lg hover:tw-text-primary-text-color -tw-ml-0.5" @click="selectEduvacity">
          Eduvacity
        </div>
      </div>
      <div v-if="selected == 'bexil'" class="lg:tw-ml-8 tw-mt-8 tw-pr-6 sm:tw-mt-0">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Frontend developer <span class="title tw-text-primary-text-color"><a href="https://bexilsolutions.com/" target="_blank" rel="noopener noreferrer">@Bexil</a></span>
          </div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Participating in the Agile Product Development Life Cycle (Fintech, Social Network, Transport)
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Building efficient and reusable web systems and abstractions
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Improving and optimizing existing functionality
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Identifying and practicing Python and Javascript best practices
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Working and communicating directly with the back-end developers
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Participating in internal meetups, brainstorming and technical discussions
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selected == 'dyfuso'" class="lg:tw-ml-8 sm:-tw-ml-8 tw-mt-8 tw-pr-6 sm:tw-mt-0">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Frontend engineer <span class="title tw-text-primary-text-color"><a href="https://kuuka.dyfuso.com/" target="_blank" rel="noopener noreferrer">@Dyfuso</a></span>
          </div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Building reusable and testable components and libraries for future use
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Creating of high-performance online store management system
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Integrate real-time tracking and communication into the system
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Optimized loading of initial config
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Participating in the Agile Product Development Life Cycle
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Improving and optimizing existing functionality 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selected == 'eduvacity'" class="lg:tw-ml-8 tw-mt-8 tw-pr-6 sm:tw-mt-0">
        <div>
          <div class="tw-text-2xl sm:tw-text-3xl">
            Senior frontend engineer <span class="title tw-text-primary-text-color"><a href="https://www.eduvacity.com/" target="_blank" rel="noopener noreferrer">@Eduvacity</a></span>
          </div>
          <div class="tw-mt-5">
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Building and maintaining reusable and testable components and libraries for future use
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Created custom Vue.js with Quasar framwork components for the project
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Translate figma into responsive components, using Vue js, Quasar, Tailwindcss and JavaScript
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Participating in the Agile Product Development Life Cycle
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Identifying and practicing Python and Javascript best practices 
              </div>
            </div>
            <div class="tw-flex tw-ml-0.5 tw-mt-2">
              <svg class="tw-w-3 tw-absolute tw-mt-1 sm:tw-mt-2 tw-text-primary-text-color tw-fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
              <g>
                <path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27,432.077L190.579,245z"/>
              </g>
              </svg>
              <div class="tw-text-sm sm:tw-text-lg tw-pl-4 tw-font-light">
                Participating in internal meetups, brainstorming and technical discussions
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
    const selected = ref('bexil')

    const selectBexil = () => {
      return selected.value = 'bexil'
    }

    const selectKuuka = () => {
      return selected.value = 'dyfuso'
    }

    const selectEduvacity = () => {
      return selected.value = 'eduvacity'
    }

    return {
      selected,
      selectBexil,
      selectKuuka,
      selectEduvacity
    }
  },
})
</script>


<style scoped>
.title {
  transition: all ease 900ms;
}
</style>