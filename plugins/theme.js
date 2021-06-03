import Vue from 'vue'

const theme = {
  dark: false,
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#E3F2FD',
      accent: '#D81B60',
      onAccent: '#FAFAFA',
    },
    dark: {
      primary: '#1976D2',
      secondary: '#E3F2FD',
      accent: '#D1C4E9',
      onAccent: '#000000',
    },
  },
}
class ThemeService {
  constructor(store) {
    this.$store = store
  }

  get isDark() {
    return this.$store.getters.darkTheme
  }

  get currentTheme() {
    if (this.$store.getters.darkTheme) return theme.themes.dark
    return theme.themes.light
  }
}

export default ({ store }) => {
  const themeService = new ThemeService(store)
  Vue.prototype.$themeService = themeService
  Vue.$themeService = themeService
  // await store.dispatch('auth/load')
}
