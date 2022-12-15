import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Services from "./pages/Services";
import NoEvent from "./pages/noEvent/NoEvent";
import Commercial from "./pages/sub-pages/Commercial";
import Hospitality from "./pages/sub-pages/Hospitality";
import Residential from "./pages/sub-pages/Residential";
import Institutional from "./pages/sub-pages/Institutional";
import Industrial from "./pages/sub-pages/Industrial";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<NoEvent />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
