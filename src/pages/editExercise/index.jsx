import { useLocation } from "react-router-dom";
import EditExercise from "../../components/ui/forms/editExercise";
import { useEffect } from "react";
import useStore from "../../store/useStore";

import "./styles.scss";
const EditExercisePage = () => {
  const { fetchCategories, fetchBodyParts, categories, bodyParts } = useStore((state) => state);
  const location = useLocation();
  const exercise = location?.state?.exercise;

  useEffect(() => {
    fetchBodyParts();
    fetchCategories();
  }, []);

  return (
    <div className="edit-exercise">
      <h1 className="edit-exercise__heading">Edit {exercise.name}</h1>
      {exercise ? (
        <EditExercise
          targetExercise={exercise}
          categories={categories.data}
          muscleGroups={bodyParts.data}
        />
      ) : null}
    </div>
  );
};
export default EditExercisePage;
