<template>
  <div class="app-column">
    <div class="app-row">
      <AppButton height="36" @click="$router.push('/')">
        <AppIcon icon-class="mdi-chevron-left" />
      </AppButton>
    </div>
    <div class="app-row mt-6">
      <AppCard width="100%">
        <div v-if="movie.error" class="text-subtitle">
          Error cargando la película
        </div>
        <div v-else class="app-row ma-n2">
          <div class="app-column col-12 col-sm-12 col-md-4 pa-2">
            <img
              class="image-full"
              style="border-radius: 8px"
              :src="
                movie.Poster !== 'N/A'
                  ? movie.Poster
                  : 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png'
              "
              :alt="`${movie.Title} Image`"
              onerror="this.src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png'"
            />
          </div>
          <div class="app-column col-12 col-sm-12 col-md-4 pa-2">
            <div class="app-row ma-n2">
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">Título</span>
                <span class="text-subtitle">{{ movie.Title }}</span>
              </div>
              <div class="app-column col-12 col-md-21 pa-2">
                <span class="text-subtitle font-weight-bold">Director</span>
                <span class="text-subtitle">{{ movie.Director }}</span>
              </div>
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">Actores</span>
                <span class="text-subtitle">{{ movie.Actors }}</span>
              </div>
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">Resumen</span>
                <span class="text-subtitle">{{ movie.Plot }}</span>
              </div>
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">Escrito por</span>
                <span class="text-subtitle">{{ movie.Writer }}</span>
              </div>
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">Premios</span>
                <span class="text-subtitle">{{ movie.Awards }}</span>
              </div>
            </div>
          </div>
          <div class="app-column col-12 col-sm-12 col-md-4 pa-2">
            <div class="app-row ma-n2">
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">Producción</span>
                <span class="text-subtitle">{{ movie.Production }}</span>
              </div>
              <div class="app-column col-6 col-md-6 pa-2">
                <span class="text-subtitle font-weight-bold">Año</span>
                <span class="text-subtitle">{{ movie.Year }}</span>
              </div>
              <div class="app-column col-6 col-md-6 pa-2">
                <span class="text-subtitle font-weight-bold">Calificación</span>
                <span class="text-subtitle">{{ movie.Rated }}</span>
              </div>
              <div class="app-column col-6 col-md-6 pa-2">
                <span class="text-subtitle font-weight-bold">Estrenada</span>
                <span class="text-subtitle">{{ movie.Released }}</span>
              </div>
              <div class="app-column col-6 col-md-6 pa-2">
                <span class="text-subtitle font-weight-bold">Duración</span>
                <span class="text-subtitle">{{ movie.Runtime }}</span>
              </div>
              <div class="app-column col-12 col-md-6 pa-2">
                <span class="text-subtitle font-weight-bold">Género</span>
                <span class="text-subtitle">{{ movie.Genre }}</span>
              </div>

              <div class="app-column col-12 col-md-6 pa-2">
                <span class="text-subtitle font-weight-bold">País</span>
                <span class="text-subtitle">{{ movie.Country }}</span>
              </div>
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold">
                  Valoración(es)
                </span>
                <ul
                  v-if="movie.Ratings && movie.Ratings.length > 0"
                  class="text-subtitle pl-4"
                >
                  <li
                    v-for="rating in movie.Ratings"
                    :key="rating.Source"
                    class="app-text-left"
                  >
                    <span class="text-caption"
                      ><b>{{ rating.Source }}:</b> {{ rating.Value }}</span
                    >
                  </li>
                </ul>
              </div>
              <div class="app-column col-12 col-md-12 pa-2">
                <span class="text-subtitle font-weight-bold"> IMDB </span>
                <ul class="text-subtitle pl-4">
                  <li v-if="movie.imdbRating" class="app-text-left">
                    <span class="text-caption"
                      ><b>Valoración:</b> {{ movie.imdbRating }}</span
                    >
                  </li>
                  <li v-if="movie.imdbVotes" class="app-text-left">
                    <span class="text-caption"
                      ><b>Votos:</b> {{ movie.imdbVotes }}</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>

<script>
const fetchMovieByID = (axiosInstance, imdbID) => {
  return axiosInstance
    .$get(
      `https://www.omdbapi.com/?apiKey=${process.env.OMDB_API_KEY}&i=${imdbID}`
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
      movie: {
        Title: 'Harry Potter and the Deathly Hallows: Part 2',
        Year: '2011',
        Rated: 'PG-13',
        Released: '15 Jul 2011',
        Runtime: '130 min',
        Genre: 'Adventure, Drama, Fantasy, Mystery',
        Director: 'David Yates',
        Writer: 'Steve Kloves (screenplay), J.K. Rowling (novel)',
        Actors: 'Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe',
        Plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 3 Oscars. Another 46 wins & 91 nominations.',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.1/10',
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '96%',
          },
          {
            Source: 'Metacritic',
            Value: '85/100',
          },
        ],
        Metascore: '85',
        imdbRating: '8.1',
        imdbVotes: '781,847',
        imdbID: 'tt1201607',
        Type: 'movie',
        DVD: '24 Jul 2014',
        BoxOffice: '$381,409,310',
        Production: 'Warner Bros., Moving Picture Company, Heyday Films',
        Website: 'N/A',
        Response: 'True',
      },
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
