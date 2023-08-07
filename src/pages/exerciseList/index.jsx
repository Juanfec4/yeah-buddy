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
    <div className="exercise-gallery-list">
      <h1 className="exercise-gallery-list__heading">Exercises</h1>
      <div className="exercise-gallery-list__content">
        <ExerciseGallery exercises={exercises.data} />
      </div>
    </div>
  );
};
export default ExercisesPage;
