import { produce } from "immer";
import APIService from "../../utilities/services/apiService";

const createPlanSlice = (set, get) => ({
  plans: {
    data: [],
    error: "",
    patchError: "",
    postError: "",
    deleteError: "",
  },

  fetchPlans: async () => {
    try {
      const response = await APIService.fetchAll("plans");
      set(
        produce((state) => {
          state.plans.data = response.data;
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.plans.error = error.response.data;
        })
      );
    }
  },

  postPlan: async (plan) => {
    try {
      const response = await APIService.postObject("plans", plan);
      set(
        produce((state) => {
          state.plans.data = [...state.plans.data, response.data];
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.plans.postError = error.plans.data;
        })
      );
    }
  },
  deletePlan: async (id) => {
    try {
      const response = await APIService.deleteObject("plans", id);
      set(
        produce((state) => {
          state.plans.data = state.plans.data.filter((plan) => {
            return plan._id !== id;
          });
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.plans.deleteError = error.plans.data;
        })
      );
    }
  },
});

export default createPlanSlice;
