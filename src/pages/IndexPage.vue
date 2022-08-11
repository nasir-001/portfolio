<template>
  <q-page class="">
    <NameSection />
    <AboutSection id="about" />
    <WorkExperience id="experience" />
    <ProjectsSection id="projects" />
    <GetInTouch id="contact" />
    <FooterSection />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import NameSection from 'components/NameSection.vue';
import AboutSection from 'components/AboutSection.vue';
import FooterSection from 'components/FooterSection.vue';
import WorkExperience from 'components/WorkExperience.vue';
import ProjectsSection from 'src/components/ProjectsSection.vue';
import GetInTouch from 'components/GetInTouch.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    NameSection,
    AboutSection,
    FooterSection,
    WorkExperience,
    ProjectsSection,
    GetInTouch
  }
})
</script>
