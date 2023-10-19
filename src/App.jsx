import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";

import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
import AddBeerPage from "./pages/AddBeerPageReactForm";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
