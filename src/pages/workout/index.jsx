import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiService from "../../utilities/services/apiService";
import ExerciseCard from "../../components/exerciseCard";
import "./styles.scss";
import PrimaryButton from "../../components/ui/buttons/primaryButton";
import SecondaryButton from "../../components/ui/buttons/secondaryButton";
import Timer from "../../components/ui/misc/timer";

const WorkoutPage = () => {
  const [workout, setWorkout] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    apiService
      .fetchByID("plans", id)
      .then((response) => {
        setWorkout(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleExitWorkout = () => {
    navigate("../");
  };

  const handleCompleteWorkout = () => {
    apiService.patchObject("plans", id, {
      lastPerformed: new Date(),
    });
    navigate("../");
  };

  return (
    <div className="workout">
      <h2 className="workout__title">{workout.name}</h2>
      <div className="workout__timer-container">
        <h4 className="workout__subheading">Elapsed time</h4>
        <Timer />
      </div>
      <div className="workout__exercise-gallery">
        {workout.exercises
          ? workout.exercises.map((exercise) => {
              return <ExerciseCard exercise={exercise} inRoutine={true} />;
            })
          : null}
      </div>
      <div className="workout__button-container">
        <PrimaryButton content={"Complete workout"} handleClick={handleCompleteWorkout} />
        <SecondaryButton content={"Cancel workout"} handleClick={handleExitWorkout} />
      </div>
    </div>
  );
};
export default WorkoutPage;
