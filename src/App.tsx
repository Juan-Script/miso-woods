// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Products } from "./pages/Products/Products";
import { Header } from "./components/shared/Header";
import { CardProduct } from "./pages/Products/components/CardProduct";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/" element={<Products />} />
          <Route path="products/:slug" element={<CardProduct />} />
          <Route path="aboutus/" element={<AboutUs />} />
          <Route path="contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
