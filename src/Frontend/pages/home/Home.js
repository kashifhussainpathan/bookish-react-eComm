import { Nav } from "./homeComponents/Nav";
import { HeroSection } from "./homeComponents/HeroSection";
import { Collections } from "./homeComponents/Collections";
import { Genre } from "./homeComponents/Genre";

// Importing Css
import "./homeStyles.css";
import { Footer } from "../../utils/footer/Footer";

export const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <HeroSection />

      {/* Books Collection */}
      <Collections />

      {/* Genre Section */}
      <Genre />

      {/* Footer */}
      <Footer />
    </div>
  );
};
