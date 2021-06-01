<template>
  <div class="playground">
    <AppOverlay v-model="drawer" class="hide-for-desktop" />
    <TheNavSidebar v-model="drawer" />
    <TheHeader />
    <div
      class="app-container"
      :class="{
        'app-with-sidebar-active': drawer,
      }"
    >
      <main class="app-content">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheNavSidebar from '../components/TheNavSidebar'

export default {
  components: {
    TheHeader,
    TheNavSidebar,
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
}
</script>
<style></style>
