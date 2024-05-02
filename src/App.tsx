import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MaxWidth } from "./components/MaxWidth";
import { Register } from "./pages/Register";
import { AnimePage } from "./pages/AnimePage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MaxWidth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/aboutanime/:id" element={<AnimePage />} />

        </Routes>
      </MaxWidth>
    </BrowserRouter>
  );
}

export default App;
