<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row tw-justify-center">
      <div class="col-12 col-xl-9">
        <div class="tw-bg-primary-bg-color tw-h-24 shadow-8">
          <q-toolbar class="tw-px-10">
            <div class="">
              <q-img
                class="tw-w-14 tw-mt-5 tw-rounded-full"
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
        </div>

        <q-drawer
          v-model="leftDrawerOpen"
          bordered
          side="right"
        >
          <q-list>
            <q-item-label
              header
            >
              Essential Links
            </q-item-label>

            
          </q-list>
        </q-drawer>

        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
