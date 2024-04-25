import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App