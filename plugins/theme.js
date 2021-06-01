import Vue from 'vue'

const theme = {
  dark: false,
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#E3F2FD',
      accent: '#FFA726',
    },
    dark: {},
  },
}

export default () => {
  Vue.prototype.$theme = theme
  Vue.$theme = theme
}
