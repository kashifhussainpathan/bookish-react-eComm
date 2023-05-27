import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { ProductsNav } from "./components/ProductsNav";

import "./productsStyle.css";

export const Products = () => {
  return (
    <div>
      {/* Products Page */}
      <ProductsNav />
      <section className="products-section">
        <div className="products-aside-section">
          <Aside />
        </div>
        <div className="products-main-section">
          <Main />
        </div>
      </section>
    </div>
  );
};
