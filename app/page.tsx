import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Properties from "./components/Properties";
import Amenities from "./components/Amenities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Properties />
      <Amenities />
      <Footer />
    </>
  );
}
