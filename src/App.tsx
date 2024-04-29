import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MaxWidth } from "./components/MaxWidth";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MaxWidth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </MaxWidth>
    </BrowserRouter>
  );
}

export default App;
