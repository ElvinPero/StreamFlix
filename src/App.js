import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=1bced0e9";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState([]);

  const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  }
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('john wick');
  }, []);
  return (
    <div className="app">
      <h1>/  StreamFlix  / </h1>
      <div className='search'>
        <input type="text" placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => { setSearchterm(e.target.value) }}
        />
        <img src={SearchIcon} alt="search"
          onClick={() => searchMovies(searchTerm)}
        />

      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
