<template>
  <q-page class="flex flex-center">
    <NameSection />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import NameSection from 'components/NameSection.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    NameSection
  }
})
</script>
