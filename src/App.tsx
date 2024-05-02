import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MaxWidth } from "./components/MaxWidth";
import { Register } from "./pages/Register";
import { AnimePage } from "./pages/AnimePage";
import { UserList } from "./pages/UserList";
import { UserProvider } from "./hooks/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <MaxWidth>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/aboutanime/:id" element={<AnimePage />} />
          </Routes>
        </MaxWidth>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
