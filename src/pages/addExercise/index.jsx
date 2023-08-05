import EditExercise from "../../components/ui/forms/editExercise";
import useStore from "../../store/useStore";
import { useEffect } from "react";

import "./styles.scss";
const AddExercisePage = () => {
  const { fetchCategories, fetchBodyParts, categories, bodyParts } = useStore((state) => state);
  useEffect(() => {
    fetchBodyParts();
    fetchCategories();
  }, []);

  return (
    <div className="add-exercise">
      <h1 className="add-exercise__heading">Create new exercise</h1>
      <EditExercise
        categories={categories.data}
        muscleGroups={bodyParts.data}
        targetExercise={null}
      />
    </div>
  );
};
export default AddExercisePage;
