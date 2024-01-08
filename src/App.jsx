import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";
import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#EEEFF0] -z-20">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Banner />
        <FoodSection />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
