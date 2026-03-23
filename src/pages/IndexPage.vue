<template>
  <q-page class="">
    <NameSection />
    <AboutSection id="about" />
    <WorkExperience id="experience" />
    <ProjectsSection id="projects" />
    <PhilosophySection id="philosophy" />
    <ServicesSection id="services" />
    <ExpertiseSection id="expertise" />
    <MilestoneSection id="milestones" />
    <WorkHighlightsSection id="work-highlights" />
    <CaseStudiesSection id="case-studies" />
    <ImpactResultsSection id="impact-results" />
    <EducationSection id="education" />
    <LanguageSection id="languages" />
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
import PhilosophySection from 'components/PhilosophySection.vue';
import ServicesSection from 'components/ServicesSection.vue';
import ExpertiseSection from 'components/ExpertiseSection.vue';
import MilestoneSection from 'components/MilestoneSection.vue';
import WorkHighlightsSection from 'components/WorkHighlightsSection.vue';
import CaseStudiesSection from 'components/CaseStudiesSection.vue';
import ImpactResultsSection from 'components/ImpactResultsSection.vue';
import EducationSection from 'components/EducationSection.vue';
import LanguageSection from 'components/LanguageSection.vue';
import GetInTouch from 'components/GetInTouch.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    NameSection,
    AboutSection,
    FooterSection,
    WorkExperience,
    ProjectsSection,
    PhilosophySection,
    ServicesSection,
    ExpertiseSection,
    MilestoneSection,
    WorkHighlightsSection,
    CaseStudiesSection,
    ImpactResultsSection,
    EducationSection,
    LanguageSection,
    GetInTouch
  }
})
</script>
