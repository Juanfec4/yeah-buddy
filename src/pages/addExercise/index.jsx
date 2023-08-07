import EditExercise from "../../components/ui/forms/editExercise";
import useStore from "../../store/useStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import ExitButton from "../../components/ui/buttons/exitButton";
const AddExercisePage = () => {
  const { fetchCategories, fetchBodyParts, categories, bodyParts } = useStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    fetchBodyParts();
    fetchCategories();
  }, []);

  const handleExit = () => {
    navigate("../exercises");
  };
  return (
    <div className="add-exercise">
      <ExitButton innerClass={"exit__add-routine"} handleClick={handleExit} />
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
