import { produce } from "immer";
import APIService from "../../utilities/services/apiService";

const createCategorySlice = (set, get) => ({
  categories: {
    data: [],
    error: "",
  },

  fetchCategories: async () => {
    try {
      const response = await APIService.fetchAll("categories");
      set(
        produce((state) => {
          state.categories.data = response.data;
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.categories.error = error.response.data;
        })
      );
    }
  },
});

export default createCategorySlice;
