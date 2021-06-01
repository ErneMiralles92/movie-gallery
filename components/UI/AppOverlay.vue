<template>
  <div v-show="value" class="app-overlay">
    <div class="app-overlay-screen" @click="clickedOutside"></div>
    <div class="app-overlay-content"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickedOutside() {
      console.log('clickedOutside')
      this.$emit('input', false)
    },
  },
}
</script>

<style scoped>
.app-overlay {
  z-index: 6;
  align-items: center;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms;
}
.app-overlay-screen {
  border-radius: inherit;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
  width: 100%;
  will-change: opacity;
  opacity: 0.46;
  background-color: rgb(33, 33, 33);
  border-color: rgb(33, 33, 33);
}

.app-overlay-content {
  position: relative;
}
</style>
