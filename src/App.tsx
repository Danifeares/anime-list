import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MaxWidth } from "./components/MaxWidth";
import { AnimeDetails } from "./pages/AnimeDetails";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <MaxWidth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animeDetails" element={<AnimeDetails />} />
        </Routes>
      </MaxWidth>
    </BrowserRouter>
  )
}

export default App