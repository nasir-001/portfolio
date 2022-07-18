<template>
  <div class="tw-pt-44 tw-pl-24">
    <VueWriter class="tw-text-3xl tw-text-primary-text-color" :array="['Hi, my name is']" :eraseSpeed="50" :typeSpeed="100" :delay="5000" />
    <div class="tw-pl-8">
      <div class="tw-pt-12 tw-font-extrabold tw-text-gray-300 tw-text-8xl">
        Nasir Lawal
      </div>
      <div class="tw-pt-2 tw-font-extrabold tw-text-gray-300 tw-text-8xl">
        Software engineer
      </div>
    </div>
    <div class="tw-pt-16 tw-w-1/2">
      <div class="tw-text-lg tw-text-gray-500 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum maxime fugit quas eveniet neque, tempora laudantium ad, quae in voluptatem aspernatur, provident repellat fuga! Illum dolorum quos id asperiores tempore!
      </div>
      <div class="tw-mt-4 tw-mx-4 tw-rounded-lg tw-w-32 tw-h-16 tw-p-0.5 tw-border tw-border-primary-text-color">
        <q-btn color="info" flat class="tw-rounded-lg tw-w-full tw-text-primary-text-color" no-caps label="resume" @click="onClick" />
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