import ExclusiveSupplier from "./components/Exclusivesupplier";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PopularCategories from "./components/PopularCategories"
import Scores from "./components/Scores"
import Support from "./components/Support";
import WhySupplier from "./components/WhySupplier";


function App() {

  return (
    <section>
      <section className="container mx-auto px-4 md:px-4 lg:px-5">
        <Navbar />
        <Scores />
        <WhySupplier />
      </section>
      <ExclusiveSupplier />
      <section className="container mx-auto px-4 md:px-4 lg:px-5">
        <PopularCategories />
        <HowItWorks />
      </section>
      <Support />
      <Footer />
    </section>
  );
}

export default App
