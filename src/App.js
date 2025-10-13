import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import RegisterDemo from "./pages/RegisterDemo";
import Particle12 from "./components/Particles12";
import Home123 from "./pages/Home Introduce/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/registerdemo" element={<RegisterDemo />}/>
        <Route path="/hometest" element={<Home123 />}/>
        <Route path="/parti" element={<Particle12/>}/>
      </Routes>
    </Router>
  );
}
