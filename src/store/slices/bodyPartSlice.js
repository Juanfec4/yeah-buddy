import { produce } from "immer";
import APIService from "../../utilities/services/apiService";

const createBodyPartSlice = (set, get) => ({
  bodyParts: {
    data: [],
    error: "",
  },

  fetchBodyParts: async () => {
    try {
      const response = await APIService.fetchAll("body-parts");
      set(
        produce((state) => {
          state.bodyParts.data = response.data;
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.bodyParts.error = error.response.data;
        })
      );
    }
  },
});

export default createBodyPartSlice;
