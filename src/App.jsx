import Navbar from "./components/Navbar"
import PopularCategories from "./components/PopularCategories"
import Scores from "./components/Scores"


function App() {

  return (
    <div className="container mx-auto px-4 md:px-4 lg:px-5">
      <Navbar />
      <Scores />
      <PopularCategories />
    </div>
  );
}

export default App
