import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import NoPage from "./components/NoPage";
import "./styles/_main.sass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/gym-react/" element={<Home />} />
          <Route path="/gym-react/about" element={<About />} />
          <Route path="/gym-react/service" element={<Service />} />
          <Route path="/gym-react*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
