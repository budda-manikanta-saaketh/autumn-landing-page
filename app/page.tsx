import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Properties from "./components/Properties";
import Amenities from "./components/Amenities";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Properties />
      <Amenities />
    </>
  );
}
