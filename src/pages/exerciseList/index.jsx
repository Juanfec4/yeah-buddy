import ExerciseGallery from "../../components/exerciseGallery/index";
import useStore from "../../store/useStore";
import { useEffect } from "react";

import "./styles.scss";
const ExercisesPage = () => {
  const { fetchExercises, exercises } = useStore((state) => state);
  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="exercise-list">
      <h1 className="exercise-list__heading">Exercises</h1>
      <div className="exercise-list__content">
        <ExerciseGallery exercises={exercises.data} />
      </div>
    </div>
  );
};
export default ExercisesPage;
