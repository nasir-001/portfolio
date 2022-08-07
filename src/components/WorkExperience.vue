<template>
  <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5 lg:tw-pl-12 xl:tw-pl-24">
    <div class="row">
      <div class="tw-px-10">
        <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">02.</span><span class="tw-text-4xl tw-pl-4 tw-text-gray-300">Work Experience</span>
      </div>
      <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
    </div>
    <div class="tw-flex tw-ml-10 tw-mt-12 tw-text-gray-300">
      <div class="tw-border-l-2 tw-border-gray-700 tw-w-44">
        <div :class="selected == 'bexil' ? 'tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''" class="tw-pl-6 title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-lg hover:tw-text-primary-text-color -tw-ml-0.5" @click="selectBexil">
          Bexil
        </div>
        <div :class="selected == 'dyfuso' ? 'tw-border-l-2 tw-border-primary-text-color tw-text-primary-text-color' : ''" class="tw-pl-6 title hover:tw-bg-gray-700 hover:tw-opacity-75 tw-cursor-pointer tw-h-14 tw-pt-4 tw-text-lg hover:tw-text-primary-text-color -tw-ml-0.5" @click="selectKuuka">
          Dyfuso
        </div>
      </div>
      <div v-if="selected == 'bexil'" class="tw-ml-8">
        <div>
          <div class="tw-text-2xl">
            Frontend developer <span class="title tw-text-primary-text-color hover:tw-"><a href="https://bexilsolutions.com/" target="_blank" rel="noopener noreferrer">@Bexil computer and solutions</a></span>
          </div>
        </div>
      </div>
      <div v-if="selected == 'dyfuso'" class="tw-ml-8">
        Frontend developer
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

    return {
      selected,
      selectBexil,
      selectKuuka
    }
  },
})
</script>


<style scoped>
.title {
  transition: all ease 900ms;
}
</style>