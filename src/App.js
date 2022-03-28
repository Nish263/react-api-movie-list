import "./App.css";
import { Title } from "./components/title/Title";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/movie-list/MovieList";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <hr />
      </Container>
      <MovieList />
    </div>
  );
};

export default App;
