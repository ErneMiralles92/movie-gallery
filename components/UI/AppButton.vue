<template>
  <button
    v-bind="$attrs"
    type="button"
    class="app-btn"
    :class="btnClasses"
    :style="customStyle"
    v-on="$listeners"
  >
    <div class="app-btn__content">
      <Nuxt-Link v-if="to" :to="to">
        <slot name="default"> </slot>
      </Nuxt-Link>
      <slot v-else name="default"> </slot>
    </div>
  </button>
</template>

<script>
import { convertToUnit } from '~/utils/helpers'

const SIZE_MAP = {
  small: '16px',
  default: 'fit-content',
  medium: '24px',
  large: '36px',
}

export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    height: {
      type: [Number, String],
      default: SIZE_MAP.default,
    },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    text: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: [Number, String],
      default: 8,
    },
    to: {
      type: String,
      default: '',
    },
  },
  computed: {
    isLinkExactActive() {
      const to = this.to.endsWith('/') ? this.to : this.to + '/'
      return !!this.to && this.$route.path === to
    },
    resultingHeight() {
      const sizes = {
        small: this.small,
        medium: this.medium,
        large: this.large,
      }
      const explicitHeight = Object.keys(sizes).find((key) => sizes[key])
      return (
        (explicitHeight && SIZE_MAP[explicitHeight]) ||
        convertToUnit(this.height)
      )
    },
    regular() {
      return !this.text && !this.rounded && !this.icon && !this.depressed
    },
    btnClasses() {
      const btnClasses = {
        'app-btn-regular': this.regular,
        'app-btn-text': this.text,
        'app-btn-icon': this.icon,
        // 'app-btn-flat': this.icon,
        'app-btn-round': this.icon,
        'app-btn-rounded': this.rounded,
        'app-btn-depressed': this.depressed,
        'app-btn-disabled': this.disabled,
        'app-btn-link': this.to,
        'app-btn-link-exact-active': this.isLinkExactActive,
      }
      return btnClasses
    },
    customStyle() {
      let styles = {
        'border-radius': convertToUnit(this.borderRadius),
      }
      if (this.color) {
        styles['background-color'] = this.color
        styles.borderColor = this.color
      }
      if (this.textColor) {
        styles.color = this.textColor
      }
      const size = this.resultingHeight
      if (size) {
        styles = {
          ...styles,
          // fontSize: size,
          height: size,
        }
        if (this.icon) {
          styles.width = size
        }
        if (this.rounded) {
          styles['border-radius'] = size
        }
      }
      return styles
    },
  },
}
</script>

<style scoped lang="scss">
.app-dark {
  .app-btn {
    background-color: $darkElementsColor;
  }

  .app-btn__content {
    span {
      color: $darkTextColor;
    }
  }
}
.app-btn {
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  justify-content: center;
  outline: 0;
  border-style: none;
  position: relative;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0 16px;
  background-color: $lightElementsColor;
}

.app-btn__content {
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  line-height: normal;
  position: relative;

  span {
    color: $lightTextColor;
  }
}

.app-btn-disabled {
  .app-btn__content {
    span {
      color: #bdbdbd;
    }
  }
}

.app-btn-icon .app-btn__content {
  justify-content: center;
}
.app-btn.app-btn-regular {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.app-btn.app-btn-regular:active {
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%);
}

.app-btn.app-btn-depressed {
  box-shadow: none !important;
}

/* .app-btn.app-btn-rounded {
  border-radius: 28px;
} */

.app-btn-flat,
.app-btn-text {
  background-color: transparent !important;
  border-radius: 4px;
}

.app-btn-text:hover {
  /* background-color: rgba(245, 245, 245, 0.8) !important; */
}

.app-btn:not(.app-btn-round) {
  min-width: 48px;
}
.app-btn-round {
  border-radius: 50%;
  padding: 0;
}

/* .app-btn-icon {
  height: 36px;
  width: 36px;
} */

.app-btn-icon:hover {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.app-btn-link-exact-active {
  background-color: #e3f2fd !important;
}

.app-btn.app-btn-disabled:not(.app-btn-flat):not(.app-btn-text) {
  background-color: #fafafa !important;
}

.app-btn-disabled {
  box-shadow: none;
  pointer-events: none;
  cursor: default;
}

.app-btn.app-btn-disabled,
.app-btn.app-btn-disabled .app-icon {
  color: rgba(0, 0, 0, 0.26) !important;
}

.app-btn:active {
  opacity: 0.6;
}

.app-btn-link {
}
.app-btn-link a {
  text-decoration: none;
}
</style>
