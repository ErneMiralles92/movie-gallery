<template>
  <div class="app-row mx-n2">
    <div
      v-for="(movie, index) in movies"
      :key="movie.imdbID"
      class="app-col col-12 col-sm-6 col-md-3 pa-2"
    >
      <AppCard
        hover
        class="pa-0"
        height="100%"
        border-radius="8px"
        @click="toDetails(index)"
      >
        <div class="app-column">
          <AppButton
            large
            :color="$themeService.currentTheme.accent"
            class="fab fab-top fab-left"
            icon
            rounded
            @click.stop="addToCart"
          >
            <AppIcon :color="$themeService.currentTheme.onAccent">
              mdi-cart-plus
            </AppIcon>
          </AppButton>
          <AppButton
            large
            :color="$themeService.currentTheme.accent"
            class="fab fab-top fab-right"
            icon
            rounded
            @click.stop="openFullScreen(+index)"
          >
            <AppIcon :color="$themeService.currentTheme.onAccent">
              mdi-fullscreen
            </AppIcon>
          </AppButton>
          <img
            class="image"
            style="height: 300px"
            :src="movie.Poster"
            :alt="`${movie.Title} Image`"
            onerror="this.src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png'"
          />
          <span class="text-subtitle font-weight-bold ma-2">{{
            movie.Title
          }}</span>
        </div>
      </AppCard>
    </div>
    <AppDialog v-model="dialog" width="350">
      <AppCard class="pa-0" border-radius="8px" width="100%">
        <div class="app-column">
          <div class="app-row app-justify-end ma-1">
            <AppButton icon @click="dialog = false">
              <AppIcon>mdi-close</AppIcon>
            </AppButton>
          </div>
          <img
            class="image-full"
            :src="selectedMovie.Poster"
            :alt="`${selectedMovie.Title} Image`"
            onerror="this.src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png'"
          />
        </div>
      </AppCard>
    </AppDialog>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedMovie: {},
      dialog: false,
      // movie: {
      //   Title: 'The Avengers',
      //   Year: '2012',
      //   Rated: 'PG-13',
      //   Released: '04 May 2012',
      //   Runtime: '143 min',
      //   Genre: 'Action, Adventure, Sci-Fi',
      //   Director: 'Joss Whedon',
      //   Writer:
      //     'Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)',
      //   Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
      //   Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      //   Language: 'English, Russian, Hindi',
      //   Country: 'USA',
      //   Awards: 'Nominated for 1 Oscar. Another 38 wins & 79 nominations.',
      //   Poster:
      //     'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      //   Ratings: [
      //     { Source: 'Internet Movie Database', Value: '8.0/10' },
      //     { Source: 'Rotten Tomatoes', Value: '91%' },
      //     { Source: 'Metacritic', Value: '69/100' },
      //   ],
      //   Metascore: '69',
      //   imdbRating: '8.0',
      //   imdbVotes: '1,280,970',
      //   imdbID: 'tt0848228',
      //   Type: 'movie',
      //   DVD: '22 Nov 2015',
      //   BoxOffice: '$623,357,910',
      //   Production: 'Marvel Studios',
      //   Website: 'N/A',
      //   Response: 'True',
      // },
    }
  },
  methods: {
    openFullScreen(index) {
      this.selectedMovie = this.movies[index]
      this.dialog = true
    },
    addToCart() {
      this.$store.commit('increaseCartCount')
    },
    toDetails(index) {
      this.selectedMovie = this.movies[index]
      this.$router.push(`/${this.selectedMovie.imdbID}`)
    },
  },
}
</script>

<style scoped lang="scss">
.image,
.image-full {
  max-width: 100%;
  height: auto;
  min-height: 200px;
}
.image {
  border-radius: 8px 8px 0 0;
}
.image-full {
  border-radius: 0px;
}
.fab {
  position: absolute;
  z-index: 4;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}
.fab-top {
  top: 8px;
}
.fab-right {
  right: 4px;
}
.fab-left {
  left: 4px;
}
</style>
