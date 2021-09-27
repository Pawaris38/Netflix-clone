const API_KEY = "265990508ea3e18acd83da9b417a2f4d";
const request = {
fetchTrending:`
/trending/all/week?api_key=${API_KEY}&language=en-US`,
fecthNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRates:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentoryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request;

