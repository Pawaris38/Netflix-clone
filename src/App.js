import './App.css';
import React from 'react';
import Row from './Row';
import request from './request';
function App() {
  return (
    <div className="App">
      {/*Nav*/}
      {/*Banner*/}
      <Row title="NETFLIX" fetchUrl={request.fecthNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRates} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentory Movies" fetchUrl={request.fetchDocumentoryMovies} />
    </div>
  );
}

export default App;
