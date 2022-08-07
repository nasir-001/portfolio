<template>
  <q-page class="">
    <NameSection />
    <AboutSection />
    <WorkExperience />
    <FooterSection />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import NameSection from 'components/NameSection.vue';
import AboutSection from 'components/AboutSection.vue';
import FooterSection from 'components/FooterSection.vue';
import WorkExperience from 'components/WorkExperience.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    NameSection,
    AboutSection,
    FooterSection,
    WorkExperience
  }
})
</script>
