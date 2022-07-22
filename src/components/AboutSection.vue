<template>
  <div class="tw-mt-80 tw-px-5 lg:tw-pl-12 xl:tw-pl-24">
    <div class="row">
      <div class="tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">01.</span><span class="tw-text-4xl tw-pl-4 tw-text-gray-300">About Me</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-border-gray-700 tw-w-80"></div>
    </div>
    <div class="tw-flex tw-justify-between tw-mx-10">
      <div class="tw-text-gray-400 tw-text-lg tw-tracking-wider">
        <div class="tw-pt-12">
          Hi👋! I'am Nasir, a software engineer based in Kaduna, Nigeria.
        </div>
        <div class="tw-pt-4">
          I have a passion creating websites and web applications. My <br>
          goal is to build complex products that provide performance and <br>
          user experience.
        </div>
      </div>
      <div class="tw-flex tw-mx-10 tw-mt-20">
        <div class="-tw-ml-6 imgBox -tw-mt-6 tw-absolute">
          <q-img
            class="tw-w-64 tw-rounded-lg tw-h-72 tw-pb-6"
            src="~assets/img/hand.png"
          />
        </div>
        <div class="tw-w-64 tw-rounded-lg tw-h-72 tw-border-2 tw-border-primary-text-color tw-mr-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AboutSection",
  setup() {
    
  },
})
</script>

<style scoped>
.imgBox:hover {
  transform: translate(15px, 15px);
}
.imgBox {
  transition: all ease 900ms;
}
</style>