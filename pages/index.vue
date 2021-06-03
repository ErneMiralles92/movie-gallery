<template>
  <div>
    <div class="app-row ma-n2">
      <div class="col-10 col-sm-8 col-md-4 pa-2">
        <AppInput v-model="search" placeholder="Search..."> </AppInput>
      </div>
      <div class="pa-2">
        <AppButton height="40px" @click="searchHandler">
          <AppIcon class="mr-2">mdi-movie-search</AppIcon>
          <span class="text-subtitle font-weight-bold"> Buscar </span>
        </AppButton>
      </div>
    </div>
    <Movies
      v-show="!!moviesData.err"
      :movies="moviesData.movies"
      class="mt-8"
    />
    <span v-show="!!moviesData.err" class="text-subtitle mt-8">{{
      moviesData.err
    }}</span>
    <AppPaginationControl
      v-if="moviesData.totalResults > 10"
      v-model="currentPage"
      class="mt-4"
      :pages="moviesData.totalResults"
    />
  </div>
</template>

<script>
class DebounceService {
  constructor(timerId) {
    this.timerId = null
  }

  debounce(callback, timeout) {
    if (this.timerId) {
      clearTimeout(this.timerId)
    } else {
      this.timerId = setTimeout(() => {
        callback()
      }, timeout)
    }
  }
}
const fetchMovies = (axiosInstance, page, search) => {
  return axiosInstance
    .$get(
      `http://www.omdbapi.com/?apiKey=${process.env.OMDB_API_KEY}&type=movie&page=${page}&s=${search}`
    )
    .then((data) => {
      console.log({ data })
      if (data.Response === 'False' && data.Error === 'Too many results.') {
        return {
          moviesData: {
            movies: [],
            err: 'Refina tu búsqueda',
            totalResults: 0,
          },
        }
      }
      return {
        moviesData: {
          movies: data.Search,
          err: data.Response !== 'True',
          totalResults: +data.totalResults,
        },
      }
    })
    .catch((error) => {
      console.log('loadMovies error ', error)
      return {
        moviesData: { movies: [], err: null, totalResults: 0 },
      }
    })
}

export default {
  asyncData(context) {
    return fetchMovies(context.app.$axios, 1, 'Ann')
  },
  data() {
    return {
      search: '',
      debounceServiceSearch: new DebounceService(null),
      currentPage: 1,
      moviesData: { movies: [], err: null, totalResults: 0 },
      // moviesData: {
      //   data: {
      //     Search: [
      //       {
      //         Title: 'Crazy, Stupid, Love.',
      //         Year: '2011',
      //         imdbID: 'tt1570728',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg',
      //       },
      //       {
      //         Title:
      //           'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      //         Year: '1964',
      //         imdbID: 'tt0057012',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'Love Actually',
      //         Year: '2003',
      //         imdbID: 'tt0314331',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'Shakespeare in Love',
      //         Year: '1998',
      //         imdbID: 'tt0138097',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'P.S. I Love You',
      //         Year: '2007',
      //         imdbID: 'tt0431308',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'I Love You, Man',
      //         Year: '2009',
      //         imdbID: 'tt1155056',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'Love & Other Drugs',
      //         Year: '2010',
      //         imdbID: 'tt0758752',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'Punch-Drunk Love',
      //         Year: '2002',
      //         imdbID: 'tt0272338',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'In the Mood for Love',
      //         Year: '2000',
      //         imdbID: 'tt0118694',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      //       },
      //       {
      //         Title: 'Love, Rosie',
      //         Year: '2014',
      //         imdbID: 'tt1638002',
      //         Type: 'movie',
      //         Poster:
      //           'https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg',
      //       },
      //     ],
      //     totalResults: '18663',
      //     Response: 'True',
      //   },
      // },
    }
  },
  watch: {
    currentPage(page) {
      this.debounceServiceSearch.debounce(this.searchMovie(page), 200)
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    searchHandler() {
      if (this.currentPage === 1) {
        this.searchMovie(this.currentPage)
      } else {
        this.currentPage = 1
      }
    },
    async searchMovie(page) {
      this.$nuxt.$loading.start()
      const { moviesData } = await fetchMovies(
        this.$axios,
        page,
        this.search ? this.search : 'Ann'
      )
      this.scrollToTop()
      this.$nuxt.$loading.finish()
      this.moviesData = moviesData
    },
  },
}
</script>

<style></style>
