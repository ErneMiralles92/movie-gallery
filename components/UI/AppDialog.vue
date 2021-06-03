<template>
  <AppOverlay
    v-show="model"
    v-model="model"
    style="z-index: 11"
    v-on="$listeners"
  >
    <div class="app-dialog-content">
      <transition name="pop">
        <div v-if="model" class="app-dialog" :style="style">
          <slot name="default" />
        </div>
      </transition>
    </div>
  </AppOverlay>
</template>

<script>
import { convertToUnit } from '~/utils/helpers'
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    width: {
      type: [Number, String],
      default: '200px',
    },
  },
  computed: {
    style() {
      const style = {
        width: convertToUnit(this.width),
      }
      return style
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    beforeEnter() {
      console.log('beforeEnter')
    },
    beforeLeave() {
      console.log('beforeLeave')
    },
  },
}
</script>

<style scoped>
.app-dialog-content {
  transform-origin: center center;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
  width: 100%;
  z-index: 12;
  outline: none;
}

.app-dialog {
  justify-content: center;
  border-radius: 4px;
  margin: 24px;
  overflow-y: auto;
  pointer-events: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  z-index: inherit;
  box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%),
    0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
