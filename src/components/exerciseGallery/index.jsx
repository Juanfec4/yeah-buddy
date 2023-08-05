import ExerciseCard from "../exerciseCard";
import Placeholder from "../ui/misc/placeholder";

import "./styles.scss";

import { useNavigate } from "react-router-dom";

const ExerciseGallery = ({ exercises }) => {
  const navigate = useNavigate();
  const handleAddExercise = () => {
    navigate("./add");
  };
  return (
    <>
      <div className="exercise-gallery">
        <Placeholder content={"add exercise"} handleClick={handleAddExercise} />
        {exercises
          ? exercises.map((exercise) => {
              return <ExerciseCard key={exercise._id} exercise={exercise} />;
            })
          : null}
      </div>
    </>
  );
};

export default ExerciseGallery;
