import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Services from "./pages/Services";
import Commercial from './pages/Commercial';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/commercial" element={<Commercial/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
