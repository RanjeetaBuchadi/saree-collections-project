import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Collections from "./components/Collections";
import SareeDetails from "./components/SareeDetails";
import SilkCollectionComponent from "./components/SilkCollection";
import PartyWearCollectionComponent from "./components/PartyWearCollection";
import HandloomCollectionComponent from "./components/HandloomCollection";
import CottonCollectionComponent from "./components/CottonCollection";
import CollectionSareeDetails from "./components/CollectionSareeDetails.jsx";


function App() {
  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Collection" element={<Collections />} />
          {/* ✅ Use the same component names that are imported */}
          <Route path="/silksaree" element={<SilkCollectionComponent />} />
          <Route path="/cottonsarees" element={<CottonCollectionComponent />} />
          <Route path="/partywear" element={<PartyWearCollectionComponent />} />
          <Route path="/handloomsarees" element={<HandloomCollectionComponent />} />
          <Route path="/collection/:id" element={<CollectionSareeDetails />} />


          {/* ✅ Add this new route for dynamic product details */}
         <Route path="/product/:id" element={<SareeDetails />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
