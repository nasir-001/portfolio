<template>
  <q-page class="">
    <NameSection />
    <AboutSection />
    <FooterSection />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import NameSection from 'components/NameSection.vue';
import AboutSection from 'components/AboutSection.vue';
import FooterSection from 'components/FooterSection.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    NameSection,
    AboutSection,
    FooterSection
  }
})
</script>
