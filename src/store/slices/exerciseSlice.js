import { produce } from "immer";
import APIService from "../../utilities/services/apiService";

const createExerciseSlice = (set, get) => ({
  exercises: {
    data: [],
    error: "",
    patchError: "",
    postError: "",
    deleteError: "",
  },

  fetchExercises: async () => {
    try {
      const response = await APIService.fetchAll("exercises");
      set(
        produce((state) => {
          state.exercises.data = response.data;
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.exercises.error = error.response.data;
        })
      );
    }
  },
  patchExercise: async (exercise) => {
    try {
      const response = await APIService.patchObject("exercises", exercise._id, exercise);
      console.log(response);
      set(
        produce((state) => {
          state.exercises.data = [...state.exercises.data, response.data];
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.exercises.patchError = error.response.data;
        })
      );
    }
  },
  postExercise: async (exercise) => {
    try {
      const response = await APIService.postObject("exercises", exercise);
      set(
        produce((state) => {
          state.exercises.data = [...state.exercises.data, response.data];
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.exercises.postError = error.response.data;
        })
      );
    }
  },
  deleteExercise: async (id) => {
    try {
      const response = await APIService.deleteObject("exercises", id);
      set(
        produce((state) => {
          state.exercises.data = state.exercises.data.filter((exercise) => {
            return exercise._id !== id;
          });
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.exercises.deleteError = error.response.data;
        })
      );
    }
  },
});

export default createExerciseSlice;
