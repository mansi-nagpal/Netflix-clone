

const requests={
    fetchTrending:'/trending/all/week?api_key=ffe5081998be1bf211c3a5a548485390&language=en-US',
    fetchNetflixOriginals:'/discover/tv?api_key=ffe5081998be1bf211c3a5a548485390&with_networks=213',
    fetchTopRated:'/movie/top_rated?api_key=ffe5081998be1bf211c3a5a548485390&language=en-US',
    fetchActionMovies:'/discover/movie?api_key=ffe5081998be1bf211c3a5a548485390&with_genres=28',
    fetchComedyMovies:'/discover/movie?api_key=ffe5081998be1bf211c3a5a548485390&with_genres=35',
    fetchHorrorMovies:'/discover/movie?api_key=ffe5081998be1bf211c3a5a548485390&with_genres=27',
    fetchRomanticnMovies:'/discover/movie?api_key=ffe5081998be1bf211c3a5a548485390&with_genres=10749',
    fetchDocumentaries:'/discover/movie?api_key=ffe5081998be1bf211c3a5a548485390&with_genres=99',

}

export default requests;