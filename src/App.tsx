import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MaxWidth } from "./components/MaxWidth";
import { AnimeDetails } from "./components/AnimeDetails";
import { AboutAnimes } from "./pages/AnimePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MaxWidth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutanimes" element={<AboutAnimes />} />
        </Routes>
      </MaxWidth>
    </BrowserRouter>
  );
}

export default App;
