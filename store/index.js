export const state = () => ({
  darkTheme: false,
  drawer: false,
  cartCount: 0,
  history: [],
})

export const mutations = {
  increaseCartCount: (state) => state.cartCount++,
  setDrawer: (state, value) => (state.drawer = value),
  setHistory: (state, value) => (state.history = value),
  setDarkTheme: (state, value) => (state.darkTheme = value),
  addMovieToHistory: (state, value) => {
    const index = state.history.findIndex((el) => el.id === value.id)
    if (index !== -1) {
      state.history.splice(index, 1)
    }
    state.history.unshift(value)
    localStorage.setItem('navHistory', JSON.stringify(state.history))
  },
}

export const getters = {
  cartCount: (state) => state.cartCount,
  drawer: (state) => state.drawer,
  darkTheme: (state) => state.darkTheme,
  history: (state) => state.history,
}
