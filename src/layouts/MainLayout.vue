<template>
  <q-layout view="hHh lpR fFf">
    <div class="row tw-justify-center tw-bg-primary-bg-color">
      <div class="col-12 col-xl-9">
        <q-header class="tw-bg-primary-bg-color tw-h-24" elevated>
          <q-toolbar class="tw-px-10">
            <div class="">
              <q-img
                class="tw-w-14 tw-mt-5 tw-rounded-full tw-border-2 tw-border-gray-300"
                src="~assets/img/avatar.jpg"
              />
            </div>
            <q-space />

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
              <q-btn flat class="tw-rounded-lg tw-w-full tw-text-primary-text-color" no-caps label="resume" @click="onClick" />
            </div>

            <q-btn
              flat
              dense
              round
              color="info"
              icon="menu"
              class="sm:tw-hidden"
              aria-label="Menu"
              @click="toggleLeftDrawer"
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
          <div class="tw-bottom-0 tw-fixed tw-w-full">
            <div class="tw-text-right">
              links
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
            <div class="tw-text-left">
              links
            </div>
          </div>
        </q-drawer>

        <q-page-container>
          <router-view />
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
      width,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
})
</script>
