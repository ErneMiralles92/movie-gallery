<template>
  <aside :class="navSideClass" class="app-nav-sidebar">
    <nav class="app-nav-content">
      <h6 class="text-subtitle mt-3">Historial</h6>
      <div class="app-row app-justify-center"></div>
    </nav>
    <div class="app-nav__border"></div>
  </aside>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
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
    navSideClass() {
      return {
        'app-nav-sidebar-inactive': !this.value,
      }
    },
    overlay: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$borderRadiusRight: 8px;
$asideGap: 1.5 * $headerHeight;

aside {
  height: calc(100vh - #{$asideGap});
  top: $asideGap;
}

.app-nav-sidebar {
  display: flex;
  flex-direction: column;
  left: 0;
  max-width: 100%;
  width: 200px;
  padding: 4px 16px;
  overflow: hidden;
  pointer-events: auto;
  transform: translateX(0);
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transition-property: transform, visibility, width;
  margin-right: 4px;
  z-index: 10;
  position: fixed;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.7) !important;
  border-top-right-radius: $borderRadiusRight;
  border-top-right-radius: $borderRadiusRight;
}

.app-nav-content {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
.app-nav__border {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.12);
}

.app-nav-sidebar-inactive {
  transform: translateX(-$sideBarWidth);
}

.cloud-icon {
  margin-top: -12px;
}
.cash-icon {
  border-radius: 50%;
  transform: rotate(-45deg);
  margin-left: -20px;
}

@media screen and (min-width: 800px) {
  .app-nav-sidebar {
    box-shadow: none;
  }
}

.drawer-btn {
  position: fixed !important;
  top: $asideGap;
  left: 8px;
}
</style>
