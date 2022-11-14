import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Header />
      {/* <Homepage /> */}
      {/* <Services /> */}
      <AboutUs/>
      <Footer />
    </>
  );
};

export default App;
