export function productsReducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return { ...state, searchedProduct: action.payload };
    case "FILTER_BY_PRICE":
      return { ...state, filterPrice: action.payload };
    case "FILTER-BY-RATING":
      return { ...state, filterByRating: action.payload };
    case "SORT-BY":
      return { ...state, sortBy: action.payload };

    case "TOGGLE_CATEGORY": {
      const { category } = state;
      const updatedCategory = {
        ...category,
        [action.payload]: !category[action.payload],
      };

      // Update "ALL_CATEGORY" based on other categories' states
      if (action.payload !== "ALL_CATEGORY") {
        updatedCategory.ALL_CATEGORY = Object.values(updatedCategory).every(
          (value) => value === false
        );
      }

      // Update other categories to false when "ALL_CATEGORY" is checked
      if (updatedCategory.ALL_CATEGORY) {
        for (const key in updatedCategory) {
          if (key !== "ALL_CATEGORY") {
            updatedCategory[key] = false;
          }
        }
      }

      return { ...state, category: updatedCategory };
    }

    case "BEST_SELLERS":
      return {
        ...state,
        collections: {
          ...state.collections,
          BEST_SELLERS: !state.collections.BEST_SELLERS,
        },
      };

    case "NEW_RELEASES":
      return {
        ...state,
        collections: {
          ...state.collections,
          NEW_RELEASES: !state.collections.NEW_RELEASES,
        },
      };
    case "EXPERT_PICKS":
      return {
        ...state,
        collections: {
          ...state.collections,
          EXPERT_PICKS: !state.collections.EXPERT_PICKS,
        },
      };

    case "CLEAR":
      return {
        ...state,
        filterPrice: 600,
        filterByRating: 0,
        sortBy: "",
        category: {
          CONTEMPORARY_FICTION: false,
          SELF_HELP: false,
          BIOGRAPHIES: false,
          SPIRITUALITY: false,
          MYTHOLOGY: false,
          LITERATURE: false,
          SCIENCE_FICTION: false,
          PSYCHOLOGICAL_THRILLER: false,
          ALL_CATEGORY: true,
        },
        collections: {
          BEST_SELLERS: false,
          NEW_RELEASES: false,
          EXPERT_PICKS: false,
        },
      };
    default:
      return state;
  }
}
