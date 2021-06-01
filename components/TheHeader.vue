<template>
  <div class="app-header app-row app-align-center">
    <AppButton large class="ma-1" icon text rounded @click="drawer = !drawer">
      <AppIcon>mdi-menu</AppIcon>
    </AppButton>
    <div class="title-block app-column app-align-start">
      <h4 class="text-title app-text-left">Películas Demo</h4>
    </div>
    <div class="app-spacer"></div>
    <div class="actions app-column app-align-start app-sm-align-end">
      <div class="app-row app-align-center">
        <AppButton class="ma-1" large icon text rounded>
          <AppIcon color="#">mdi-cart</AppIcon>
        </AppButton>
        <AppButton
          class="ma-1"
          large
          icon
          text
          rounded
          @click="darkTheme = !darkTheme"
        >
          <AppIcon
            :icon-class="darkTheme ? 'mdi-brightness-5' : 'mdi-brightness-2'"
          />
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
    darkTheme: {
      get() {
        return this.$store.getters.darkTheme
      },
      set(value) {
        this.$store.commit('setDarkTheme', value)
      },
    },
  },
  watch: {
    darkTheme(newValue) {
      const appEl = document.querySelector('#__nuxt')
      if (newValue) {
        appEl.classList.add('app-dark')
      } else {
        appEl.classList.remove('app-dark')
      }
      console.log({ appEl })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  height: $headerHeight;
  width: 100%;
  padding: 4px 16px;
  background-color: $lightBackgroundColor;
}
.app-dark {
  .app-header {
    background-color: $darkBackgroundColor;
  }
}
</style>
