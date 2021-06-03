<template>
  <div class="app-column">
    <div class="app-row">
      <AppButton height="36" @click="$router.push('/')">
        <AppIcon icon-class="mdi-chevron-left" />
      </AppButton>
    </div>
    <div class="app-row mt-6">
      <AppCard>
        {{ !movie.error ? movie : 'Error cargando la película' }}
      </AppCard>
    </div>
  </div>
</template>

<script>
const fetchMovieByID = (axiosInstance, imdbID) => {
  return axiosInstance
    .$get(
      `http://www.omdbapi.com/?apiKey=${process.env.OMDB_API_KEY}&i=${imdbID}`
    )
    .then((data) => {
      console.log({ data })
      return data
    })
    .catch((error) => {
      console.log('loadMovies error ', error)
      return { error: true }
    })
}
export default {
  data() {
    return {
      movie: {},
    }
  },
  mounted() {
    console.log({ route: this.$route })
    const imdbID = this.$route?.params?.id
    if (imdbID) {
      fetchMovieByID(this.$axios, imdbID).then((data) => {
        console.log({ data })
        this.movie = data
        this.$store.commit('addMovieToHistory', {
          id: this.movie.imdbID,
          title: this.movie.Title,
        })
      })
    }
  },
}
</script>

<style></style>
