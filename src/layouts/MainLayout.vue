<template>   
  <q-layout view="hHh LpR lff">
    <div class="row tw-justify-center tw-bg-primary-bg-color">
      <div class="col-12 col-xl-9">
        <q-header class="tw-bg-primary-bg-color tw-h-24" elevated>
          <q-toolbar class="md:tw-px-10">
            <div class="">
              <q-img
                class="tw-w-14 tw-mt-5 tw-rounded-full tw-border-2 tw-border-gray-300"
                src="~assets/img/avatar.jpg"
              />
            </div>
            <q-space />
            <div class="tw-hidden sm:tw-flex">
              <div class="tw-mt-4 tw-mx-4">
                <span class="tw-text-primary-text-color">01.</span> <span class="tw-text-lg tw-text-gray-300 tw-px-3 hover:tw-text-primary-text-color">about</span>
              </div>
              <div class="tw-mt-4 tw-mx-4">
                <span class="tw-text-primary-text-color">02.</span> <span class="tw-text-lg tw-text-gray-300 tw-px-3 hover:tw-text-primary-text-color">experience</span>
              </div>
              <div class="tw-mt-4 tw-mx-4">
                <span class="tw-text-primary-text-color">03.</span> <span class="tw-text-lg tw-text-gray-300 tw-px-3 hover:tw-text-primary-text-color">projects</span>
              </div>
              <div class="tw-mt-4 tw-mx-4">
                <span class="tw-text-primary-text-color">04.</span> <span class="tw-text-lg tw-text-gray-300 tw-px-3 hover:tw-text-primary-text-color">contact</span>
              </div>
              <div class="tw-mt-4 tw-mx-4 tw-rounded-lg tw-w-32 tw-p-0.5 tw-border tw-border-primary-text-color">
                <q-btn color="info" flat class="tw-rounded-lg tw-w-full tw-text-primary-text-color" no-caps label="resume" @click="onClick" />
              </div>
            </div>

            <q-btn
              flat
              dense
              round
              color="info"
              icon="drag_handle"
              class="sm:tw-hidden"
              size="xl"
              aria-label="Menu"
              @click="toggleRightDrawerItems"
            />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="leftDrawerOpen"
          show-if-above
          :width="width"
          class="tw-bg-primary-bg-color"
          side="left"
        >
          <div class="tw-w-full tw-bottom-0 tw-fixed">
            <div class="tw-text-right">
              <div class="tw-mt-6 step">
                <a href="mailto:nasirlawal001@gmail.com">
                  <q-icon size="sm" class="tw-text-primary-text-color hover:tw-text-amber-200" name="mail_outline" />
                </a>
              </div>
              <div class="tw-mt-6 step">
                <a href="https://github.com/nasir-001" target="_blank" rel="noopener noreferrer">
                  <q-icon size="sm" class="tw-text-primary-text-color hover:tw-text-amber-200" name="fa-brands fa-github" />
                </a>
              </div>
              <div class="tw-mt-6 step">
                <a href="https://www.linkedin.com/in/nasir-lawal-302b581b1/" target="_blank" rel="noopener noreferrer">
                  <q-icon size="sm" class="tw-text-primary-text-color hover:tw-text-amber-200" name="fa-brands fa-linkedin-in" />
                </a>
              </div>
              <div class="tw-h-24 tw-mt-8 tw-border-r tw-border-gray-300 tw-mr-2.5"></div>
            </div>
          </div>
        </q-drawer>

        <q-drawer
          v-model="rightDrawerOpen"
          show-if-above
          :width="width"
          class="tw-bg-primary-bg-color"
          side="right"
        >
          <div class="tw-bottom-0 tw-fixed tw-w-full">
            <div class="tw-text-left tw-text-primary-text-color hover:tw-text-amber-200 vertical">
              <a href="mailto:nasirlawal001@gmail.com">nasirlawal001@gmail.com</a>
            </div>
            <div class="tw-h-24 tw-mt-8 tw-border-l tw-border-gray-300 tw-ml-2.5"></div>
          </div>
        </q-drawer>

        <q-drawer
          v-model="rightDrawerOpen"
          show-if-above
          :width="width"
          class="tw-bg-primary-bg-color"
          side="right"
        >
          <div class="tw-bottom-0 tw-fixed tw-w-full">
            <div class="tw-text-left tw-text-primary-text-color hover:tw-text-amber-200 vertical">
              <a href="mailto:nasirlawal001@gmail.com">nasirlawal001@gmail.com</a>
            </div>
            <div class="tw-h-24 tw-mt-8 tw-border-l tw-border-gray-300 tw-ml-2.5"></div>
          </div>
        </q-drawer>

        <q-drawer
          v-model="rightDrawerItems"
          class="tw-bg-primary-bg-color"
          side="right"
        >
          <q-list class="tw-mt-24">
            <q-item class="tw-h-14" clickable v-ripple>
              <span class="tw-text-primary-text-color tw-pt-2.5 tw-pr-3">01.</span> <q-item-section class="tw-text-lg tw-text-gray-300">about</q-item-section>
            </q-item>
            <q-item class="tw-h-14" clickable v-ripple>
              <span class="tw-text-primary-text-color tw-pt-2.5 tw-pr-3">02.</span> <q-item-section class="tw-text-lg tw-text-gray-300">experience</q-item-section>
            </q-item>
            <q-item class="tw-h-14" clickable v-ripple>
              <span class="tw-text-primary-text-color tw-pt-2.5 tw-pr-3">03.</span> <q-item-section class="tw-text-lg tw-text-gray-300">projects</q-item-section>
            </q-item>
            <q-item class="tw-h-14" clickable v-ripple>
              <span class="tw-text-primary-text-color tw-pt-2.5 tw-pr-3">04.</span> <q-item-section class="tw-text-lg tw-text-gray-300">contact</q-item-section>
            </q-item>
            <div class="tw-mx-auto tw-mt-6 tw-rounded-lg tw-w-32 tw-p-0.5 tw-border tw-border-primary-text-color">
              <q-btn color="info" flat class="tw-rounded-lg tw-w-full tw-text-primary-text-color" no-caps label="resume" @click="onClick" />
            </div>
          </q-list>
        </q-drawer>

        <q-page-container>
          <q-page>
            <router-view />
          </q-page>
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const rightDrawerItems = ref(false)
    const $q = useQuasar()

    const width = computed(() => {
      return $q.screen.width <= 428 
      ? 30 : $q.screen.width <= 1366 
      ? 50 : $q.screen.width <= 1440
      ? 80 : $q.screen.width >=  1910 ? 300 : 50
    })

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      rightDrawerItems,
      width,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      toggleRightDrawerItems () {
        rightDrawerItems.value = !rightDrawerItems.value
      }
    }
  }
})
</script>


<style scoped>
.vertical{
  writing-mode: vertical-lr;
}
.step:hover {
  transform: translateY(-30%);
}
.step {
  transition: all ease 600ms;
}
</style>