import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
