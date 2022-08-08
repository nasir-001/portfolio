<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5 lg:tw-pl-12 xl:tw-pl-24">
    <div class="row">
      <div class="sm:tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">03.</span><span class="tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Featured Projects</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-16">
      <div class="tw-w-80 tw-bg-projects-bg-color tw-h-80 tw-rounded-md shadow-9 tw-mx-3">
        <div class="tw-flex tw-justify-end tw-m-4">
          <a href="https://github.com/nasir-001/Django-Student-Helpline-Portal" target="_blank" rel="noopener noreferrer"> 
            <q-icon name="fa-brands fa-github" class="tw-mx-2 tw-mt-3 tw-text-primary-text-color" size="sm" />
          </a>
          <a href="https://student-helpline.heroku.app" target="_blank" rel="noopener noreferrer">
            <q-icon name="link" class="tw-mx-2 tw-mt-3 tw-text-primary-text-color" size="sm" />
          </a>
        </div>
        <div class="tw-pl-4 tw-text-gray-300 tw-text-xl tw-font-semibold">
          Helpline portal
        </div>
        <div class="tw-h-44 tw-px-4 tw-pt-4 tw-text-gray-400 tw-text-lg tw-font-light">
          A web application that provides a room for discussion between lecturers and students in a university.
        </div>
        <div class="tw-font-mono tw-px-4 tw-text-gray-400">
          Django, jQuery, Bootstrap, CSS
        </div>
      </div>
      <div class="tw-w-80 tw-bg-projects-bg-color tw-h-80 tw-rounded-md shadow-9 tw-mx-3">
        <div class="tw-flex tw-justify-end tw-m-4">
          <a href="https://github.com/nasir-001/Django-online-employent-system" target="_blank" rel="noopener noreferrer"> 
            <q-icon name="fa-brands fa-github" class="tw-mx-2 tw-mt-3 tw-text-primary-text-color" size="sm" />
          </a>
        </div>
        <div class="tw-pl-4 tw-text-gray-300 tw-text-xl tw-font-semibold">
          Job management
        </div>
        <div class="tw-h-44 tw-px-4 tw-pt-4 tw-text-gray-400 tw-text-lg tw-font-light">
          A django application where employers can post a vacancy and candidates can and upload resume, a successful candidate will recieve a mail.
        </div>
        <div class="tw-font-mono tw-px-4 tw-text-gray-400">
          Django, Bootstrap, CSS, SCSS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:"ProjectsSection",
  setup() {
    
  },
})
</script>
