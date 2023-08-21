// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products";
import { Header } from "./components/shared/Header";

import "./index.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/" element={<Products />} />
          <Route path="aboutus/" element={<AboutUs />} />
          <Route path="contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
