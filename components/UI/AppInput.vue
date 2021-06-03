<template>
  <div class="app-input" :class="inputClass">
    <input
      v-model="model"
      class="app-input-slot"
      :type="type"
      v-bind="$attrs"
      :placeholder="placeholder"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <div class="app-input-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      focus: false,
      blur: false,
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        value.replace('', '')
        this.$emit('input', value)
      },
    },
    inputClass() {
      return {
        'app-input__focus': this.focus,
        'app-input__blur': this.blur,
      }
    },
  },
  methods: {
    focusHandler() {
      // console.log('focusHandler')
      this.focus = true
      this.blur = false
    },
    blurHandler() {
      // console.log('blurHandler')
      this.focus = false
      this.blur = true
    },
  },
}
</script>

<style scoped lang="scss">
.app-dark {
  .app-input {
    background-color: $darkElementsColor;
    input {
      background-color: $darkElementsColor;
      color: $darkTextColor;
    }
  }
}
.app-input {
  border-radius: 8px;
  border: solid 2px;
  display: flex;
  align-items: center;
  height: 40px;
  border-color: #78909c !important;
  background-color: $lightElementsColor;
}
.app-input__focus {
  border-color: #37474f !important;
}

.app-input input {
  flex: 1 1 auto;
  line-height: 20px;
  padding: 6px 8px;
  max-width: 100%;
  min-width: 0;
  width: 100%;
  border-radius: 8px;
  border-style: none;
  background-color: $lightElementsColor;
}

.app-input input:focus-visible {
  outline: none;
}
.app-input input::placeholder {
  color: #9e9e9e;
}

.app-input-slot {
  font-size: 1rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.0125em !important;
  line-height: 2rem;
}

.app-input-append {
  display: inline-flex;
}
</style>
