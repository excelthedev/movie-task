import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagelayout from "./views/pagelayout/Pagelayout";
import MovieDetails from "./views/movies/component/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagelayout />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
