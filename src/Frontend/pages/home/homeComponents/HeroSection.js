import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    //  {/* Hero Section */}
    <section className="hero-section">
      <div>
        <h1>Explore, Discover, and Delight in the World of Reading! </h1>
        <p>
          The top book collections have been hand-picked for you at the best
          price.
        </p>
        <NavLink to="/products">
          <button> SHOP NOW</button>
        </NavLink>
      </div>
    </section>
  );
};
