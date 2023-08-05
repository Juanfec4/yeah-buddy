import { create } from "zustand";
import createCategorySlice from "./slices/categorySlice";
import createBodyPartSlice from "./slices/bodyPartSlice";
import createExerciseSlice from "./slices/exerciseSlice";

const useStore = create((set, get) => ({
  ...createCategorySlice(set, get),
  ...createBodyPartSlice(set, get),
  ...createExerciseSlice(set, get),
}));

export default useStore;
