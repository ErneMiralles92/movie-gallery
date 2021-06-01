export const state = () => ({
  darkTheme: true,
  drawer: true,
})

export const mutations = {
  setDrawer: (state, value) => (state.drawer = value),
  setDarkTheme: (state, value) => (state.darkTheme = value),
}

export const getters = {
  drawer: (state) => state.drawer,
  darkTheme: (state) => state.darkTheme,
}
