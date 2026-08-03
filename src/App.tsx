import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Insights from "./pages/Insights";
import Resources from "./pages/Resources";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";



export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

<Route path="/packages" element={<Packages />} />

      <Route path="/insights" element={<Insights />} />

      <Route path="/resources" element={<Resources />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/booking" element={<Booking />} />
    
    </Routes>
  );
}