<template>
  <div class="tw-pt-44 tw-pl-24">
    <VueWriter class="tw-text-3xl tw-text-primary-text-color" :array="['Hi, my name is']" :eraseSpeed="50" :typeSpeed="100" :delay="5000" />
    <div class="tw-pt-12 tw-font-extrabold tw-text-gray-400 tw-text-8xl">
      Nasir Lawal
    </div>
    <div class="tw-pt-2 tw-font-extrabold tw-text-gray-400 tw-text-8xl">
      Software engineer
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