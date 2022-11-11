import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Header />
      {/* <Homepage /> */}
      <Services />
      <Footer />
    </>
  );
};

export default App;
