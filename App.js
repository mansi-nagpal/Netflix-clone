import React from "react";
import Row from "./Row";
import requests from "./request";
import Banner from "./banner";
import "./app.css"
import Nav from "./nav";

function App() {
  return (
  <div className="App">
    <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticnMovies}/>
     <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
     
  </div>
  
  );
}

export default App;
