import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../reducers/productsReducer";
import { ProductsDataContext } from "./ProductsDataContext";
export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const { productsData } = useContext(ProductsDataContext);

  const initialState = {
    filterPrice: 600,
    filterByRating: 0,
    sortBy: "",
    category: {
      CONTEMPORARY_FICTION: false,
      SELF_HELP: false,
      BIOGRAPHIES: false,
      SPIRITUALITY: false,
      MYTHOLOGY: false,
      ALL_CATEGORY: true,
    },
    collections: {
      BEST_SELLERS: false,
      NEW_RELEASES: false,
      EXPERT_PICKS: false,
    },
    searchedProduct: "",
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const filteredByPriceRangeAndRating = productsData?.filter(
    (product) =>
      product.price <= state.filterPrice &&
      product.rating >= parseFloat(state.filterByRating) &&
      product.title.toLowerCase().includes(state.searchedProduct.toLowerCase())
  );

  const sortedByPrice = filteredByPriceRangeAndRating.sort((a, b) => {
    if (state.sortBy === "LowToHigh") {
      return a.price - b.price;
    } else if (state.sortBy === "HighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const filteredByCategory = sortedByPrice.filter((product) => {
    const { category } = state;
    const {
      ALL_CATEGORY,
      CONTEMPORARY_FICTION,
      SELF_HELP,
      SPIRITUALITY,
      BIOGRAPHIES,
      MYTHOLOGY,
      LITERATURE,
      SCIENCE_FICTION,
      PSYCHOLOGICAL_THRILLER,
    } = category;

    return (
      ALL_CATEGORY ||
      (CONTEMPORARY_FICTION &&
        product.categoryName === "contemporary-fiction") ||
      (SELF_HELP && product.categoryName === "self-help") ||
      (SPIRITUALITY && product.categoryName === "spirituality") ||
      (BIOGRAPHIES && product.categoryName === "biographies-autobiographies") ||
      (MYTHOLOGY && product.categoryName === "mythology") ||
      (LITERATURE && product.categoryName === "literature") ||
      (SCIENCE_FICTION && product.categoryName === "science-fiction") ||
      (PSYCHOLOGICAL_THRILLER &&
        product.categoryName === "psychological-thriller")
    );
  });

  const finalFilteredProducts = filteredByCategory.filter((product) => {
    const { collections } = state;
    const { BEST_SELLERS, NEW_RELEASES, EXPERT_PICKS } = collections;

    if (!BEST_SELLERS && !NEW_RELEASES && !EXPERT_PICKS) {
      return true;
    }

    return (
      (BEST_SELLERS && product.bestseller) ||
      (NEW_RELEASES && product.newRelease) ||
      (EXPERT_PICKS && product.expertPick)
    );
  });

  const value = { dispatch, state, finalFilteredProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
