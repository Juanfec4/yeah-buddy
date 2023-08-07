import { useLocation, useNavigate } from "react-router-dom";
import EditExercise from "../../components/ui/forms/editExercise";
import { useEffect } from "react";
import useStore from "../../store/useStore";

import "./styles.scss";
import ExitButton from "../../components/ui/buttons/exitButton";
const EditExercisePage = () => {
  const { fetchCategories, fetchBodyParts, categories, bodyParts } = useStore((state) => state);
  const location = useLocation();
  const navigate = useNavigate();
  const exercise = location?.state?.exercise;

  useEffect(() => {
    fetchBodyParts();
    fetchCategories();
  }, []);

  const handleExit = () => {
    navigate("../exercises");
  };

  return (
    <div className="edit-exercise">
      <ExitButton innerClass={"exit__edit-exercise"} handleClick={handleExit} />
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
