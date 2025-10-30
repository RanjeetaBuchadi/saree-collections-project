import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Collections from "./components/Collections";
import About from "./components/About";

// ✅ Import your collection pages
import SilkCollection from "./components/SilkCollection";
import CottonCollection from "./components/CottonCollection";
import PartyWearCollection from "./components/PartyWearCollection";
import HandloomCollection from "./components/HandloomCollection";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collections />} />

        {/* ✅ Add category routes */}
        <Route path="/silksaree" element={<SilkCollection />} />
        <Route path="/cottonsaree" element={<CottonCollection />} />
        <Route path="/partywear" element={<PartyWearCollection />} />
        <Route path="/handloom" element={<HandloomCollection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
