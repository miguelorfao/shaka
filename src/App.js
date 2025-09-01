import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Menu from "./pages/Menu";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import VenueHire from "./pages/Events";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
