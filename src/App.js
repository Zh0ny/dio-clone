import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Feed } from "./Pages/feed";

import { Home } from "./Pages/Home";
import { Login } from "./Pages/login";
import { GlobalStyle } from "./styles/global";
import { Register } from "./Pages/register";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
