<template>
  <div data-aos="fade-up" class="tw-text-center -tw-ml-4 tw-pt-36">
    <span class="tw-text-xl tw-font-light tw-text-primary-text-color">04. What is next?</span>
    <div class="tw-text-gray-300 tw-pt-4 tw-text-4xl sm:tw-text-6xl">
      Get in Touch
    </div>
    <div class="tw-text-gray-400 tw-text-base tw-font-light sm:tw-text-xl tw-pt-10">
      I'm currently looking for any new opportunities, <br class="sm:tw-hidden"> my inbox is <br class="tw-hidden sm:tw-block">
      always open. Whether you have any <br class="sm:tw-hidden"> job for me or just <br class="tw-hidden sm:tw-block">
      want to say hi, I'll <br class="sm:tw-hidden"> definitely get back to you!
    </div>
    <div class="tw-mt-12 tw-rounded-md tw-mx-auto tw-w-44 tw-h-16 tw-p-0.5 tw-border-2 tw-border-primary-text-color">
      <a href="mailto:nasirlawal001@gmail.com">
        <q-btn color="info" flat class="tw-rounded-md tw-w-full tw-h-full tw-text-primary-text-color tw-font-normal" no-caps label="Get in touch" @click="onClick" />
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "GetInTouch",
  setup() {
    
  },
})
</script>
