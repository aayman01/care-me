import Banner from "./components/Banner";
import ExclusiveSupplier from "./components/Exclusivesupplier";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PopularCategories from "./components/PopularCategories"
import Scores from "./components/Scores"
import SupplierStories from "./components/SupplierStories";
import Support from "./components/Support";
import WhySupplier from "./components/WhySupplier";


function App() {

  return (
    <section>
      <Navbar />
      <Banner />
      <section className="container mx-auto px-4 md:px-4 lg:px-5">
        <Scores />
        <WhySupplier />
      </section>

      <ExclusiveSupplier />
      <section className="container mx-auto px-4 md:px-4 lg:px-5">
        <SupplierStories />
        <h1 className="text-4xl font-bold text-center text-primary mt-10">How it works</h1>
        <HowItWorks />
        <PopularCategories />
      </section>
      <Support />
      <Footer />
    </section>
  );
}

export default App
