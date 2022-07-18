<template>
  <q-page class="">
    <NameSection />
    <AboutSection />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import NameSection from 'components/NameSection.vue';
import AboutSection from 'src/components/AboutSection.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    NameSection,
    AboutSection
  }
})
</script>
