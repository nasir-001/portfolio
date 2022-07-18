<template>
  <div class="xl:tw-pt-44 tw-px-5 lg:tw-pt-24 tw-pt-12 lg:tw-pl-12 xl:tw-pl-24">
    <VueWriter class="tw-text-xl md:tw-text-3xl tw-text-primary-text-color" :array="['Hi, my name is']" :eraseSpeed="50" :typeSpeed="100" :delay="5000" />
    <div class="md:tw-pl-8">
      <div class="tw-pt-5 md:tw-pt-12 tw-text-gray-300 tw-text-4xl sm:tw-text-6xl lg:tw-text-7xl xl:tw-text-8xl">
        Nasir Lawal
      </div>
      <div class="tw-pt-2 tw-text-gray-300 tw-text-4xl sm:tw-text-6xl lg:tw-text-7xl xl:tw-text-8xl">
        Software engineer
      </div>
    </div>
    <div class="xl:tw-pt-32 tw-pt-10 sm:tw-mx-10  xl:tw-w-1/2">
      <div class="tw-text-lg tw-text-gray-500">
        I'm a software engineer based in Kaduna, Nigeria. I focus on the best experience,
        while balancing the needs of business and pixels-perfection to create digital products.
        I specialize in building exceptional websites, applications, and everything related to it.
      </div>
      <div class="tw-mt-4 tw-rounded-md tw-w-44 tw-h-16 tw-p-0.5 tw-border-2 tw-border-primary-text-color">
        <a href="mailto:nasirlawal001@gmail.com">
          <q-btn color="info" flat class="tw-rounded-md tw-w-full tw-h-full tw-text-primary-text-color tw-font-normal" no-caps label="Get in touch" @click="onClick" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import VueWriter from 'vue-writer';

export default defineComponent({
  name: 'NameSection',
  components: {
    VueWriter
  },  

  setup() {
    return {
      
    }
  },
})
</script>