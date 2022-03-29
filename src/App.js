import "./App.css";
import React, { useState } from "react";
import { Title } from "./components/title/Title";
import { Container, Alert } from "react-bootstrap";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/movie-list/MovieList";
import { CustomCard } from "./components/card/CustomCard";
import { fetchMovie } from "./components/helper/AxiosHelper";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);
    setMovie(movie.data);
  };

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };
    //adding for first time
    !movieList.length && setMovieList([obj]);
    // movieList.length ===0 && setMovieList([obj]); alternative method to check condition
    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);
    if (!isExist) {
      setMovieList([...movieList, obj]);

      setMovie({});
    } else {
      alert("movie already in list");
    }
  };

  const handleOnDelete = (imdbID) => {
    const filteredList = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(filteredList);
  };

  const handleOnSelect = (cat) => {
    //happy selected
    //lazy selected
    // all seleted
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />
        <div className=" d-flex justify-content-center mt-3">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList} />
          )}
          {movie.Response === "False" && (
            <Alert variant="danger"> {movie.Error}</Alert>
          )}
        </div>
        <hr />
      </Container>
      <MovieList
        movieList={movieList}
        handleOnDelete={handleOnDelete}
        handleOnSelect={handleOnSelect}
      />
    </div>
  );
};

export default App;
