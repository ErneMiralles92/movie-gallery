<template>
  <i
    v-bind="$attrs"
    aria-hidden="true"
    class="app-icon mdi"
    :class="{
      [mdiIconClass]: true,
    }"
    :style="customStyle"
    v-on="$listeners"
  ></i>
</template>

<script>
import { convertToUnit } from '~/utils/helpers'

const SIZE_MAP = {
  small: '16px',
  default: '24px',
  medium: '24px',
  large: '36px',
}

export default {
  name: 'AppIcon',
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    size: {
      type: [Number, String],
      default: SIZE_MAP.default,
    },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
  },
  computed: {
    // medium() {
    //   return !this.small && !this.large
    // },
    customStyle() {
      let styles = {}
      if (this.color) {
        styles.color = this.color
      }
      styles['background-color'] = this.backgroundColor

      const size = this.resultingSize
      if (size) {
        styles = {
          ...styles,
          fontSize: size,
          height: size,
          width: size,
        }
      }
      return styles
    },
    mdiIconClass() {
      if (this.iconClass) return this.iconClass
      let iconName = ''
      if (this.$slots.default)
        iconName = this.$slots?.default[0]?.text?.trim() || ''
      return iconName
    },
    resultingSize() {
      const sizes = {
        small: this.small,
        medium: this.medium,
        large: this.large,
      }
      const explicitSize = Object.keys(sizes).find((key) => sizes[key])
      return (
        (explicitSize && SIZE_MAP[explicitSize]) || convertToUnit(this.size)
      )
    },
    resultingColor() {
      const sizes = {
        small: this.small,
        medium: this.medium,
        large: this.large,
      }
      const explicitSize = Object.keys(sizes).find((key) => sizes[key])
      return (
        (explicitSize && SIZE_MAP[explicitSize]) || convertToUnit(this.size)
      )
    },
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.app-icon {
  color: $lightTextColor;
}

.app-dark {
  .app-icon {
    color: $darkTextColor;
  }
}
</style>
