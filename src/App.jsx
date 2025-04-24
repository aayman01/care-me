import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PopularCategories from "./components/PopularCategories"
import Scores from "./components/Scores"
import Support from "./components/Support";


function App() {

  return (
    <section>
      <div className="container mx-auto px-4 md:px-4 lg:px-5">
        <Navbar />
        <Scores />
        <PopularCategories />
        <HowItWorks />
      </div>
      <Support/>
      <Footer/>
    </section>
  );
}

export default App
