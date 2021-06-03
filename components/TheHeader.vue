<template>
  <div class="app-header app-row app-align-center">
    <AppButton large class="mr-2" icon text rounded @click="drawer = !drawer">
      <AppIcon>mdi-menu</AppIcon>
    </AppButton>
    <AppButton large class="mr-2" icon text rounded @click="$router.push('/')">
      <div class="avatar">
        <img alt="logo" src="/favicon.ico" />
      </div>
    </AppButton>
    <div class="title-block app-column app-align-start">
      <h4 class="text-title app-text-left">Películas Demo</h4>
    </div>
    <div class="app-spacer"></div>
    <div class="actions app-column app-align-start app-sm-align-end">
      <div class="app-row app-align-center">
        <div class="app-col">
          <AppButton class="ma-1" large icon text rounded>
            <AppIcon>mdi-cart</AppIcon>
            <div
              class="badge text-caption"
              size="16"
              :style="{
                'background-color': $themeService.currentTheme.accent,
                color: $themeService.currentTheme.onAccent,
              }"
            >
              {{ $store.getters.cartCount }}
            </div>
          </AppButton>
        </div>

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
    darkTheme: {
      handler: 'setTheme',
    },
  },
  mounted() {
    this.setTheme(this.darkTheme)
  },
  methods: {
    setTheme(isDark) {
      const appEl = document.querySelector('#__nuxt')
      if (isDark) {
        appEl.classList.add('app-dark')
      } else {
        appEl.classList.remove('app-dark')
      }
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
  z-index: 5;
}
.app-dark {
  .app-header {
    background-color: $darkBackgroundColor;
  }
}

.badge {
  border-radius: 50%;
  margin-left: -4px;
  color: #fafafa;
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6px;
  right: -4px;
}
</style>
