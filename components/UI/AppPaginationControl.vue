<template>
  <div class="app-row app-justify-center">
    <AppButton
      class="mr-1"
      icon
      height="36"
      :disabled="disabledPrev"
      @click="prev"
    >
      <AppIcon icon-class="mdi-chevron-left" />
    </AppButton>
    <AppButton
      v-for="(i, index) in maxBtnsToShow"
      :key="`page-btn-${index}`"
      icon
      class="mx-1 page-btn"
      :class="{
        active: (index + 1) % maxBtnsToShow === currentPage % maxBtnsToShow,
      }"
      height="36"
      :color="
        (index + 1) % maxBtnsToShow === currentPage % maxBtnsToShow
          ? $themeService.currentTheme.accent
          : ''
      "
      @click="currentPage = +index + 1 + pageOffset"
    >
      <span
        :style="
          (index + 1) % maxBtnsToShow === currentPage % maxBtnsToShow
            ? {
                color: $themeService.currentTheme.onAccent,
              }
            : ''
        "
      >
        {{ index + 1 + pageOffset }}
      </span>
    </AppButton>
    <AppButton
      class="ml-1"
      icon
      height="36"
      :disabled="disabledNext"
      @click="next"
    >
      <AppIcon icon-class="mdi-chevron-right" />
    </AppButton>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    pages: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      maxBtnsToShow: 4,
    }
  },
  computed: {
    pageOffset() {
      return (
        Math.floor((this.currentPage - 1) / this.maxBtnsToShow) *
        this.maxBtnsToShow
      )
    },
    disabledPrev() {
      return this.currentPage === 1
    },
    disabledNext() {
      return this.currentPage === this.pages
    },
    currentPage: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    prev() {
      if (this.currentPage > 1) this.currentPage--
      console.log('prev')
    },
    next() {
      if (this.currentPage < this.pages) this.currentPage++
      console.log('next')
    },
  },
}
</script>

<style scoped lang="scss">
.page-btn {
  font-size: 16px;
  font-weight: 600;
}
.page-btn.active {
  transform: scale(1.1);
}
</style>
