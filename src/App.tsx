import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MaxWidth } from "./components/MaxWidth";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <MaxWidth>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MaxWidth>
    </BrowserRouter>
  )
}

export default App