import PrimaryButton from "../ui/buttons/primaryButton";
import CategoryTag from "../ui/misc/categoryTag";
import { useMemo, useState } from "react";
import "./styles.scss";
const WorkoutCard = ({ workout }) => {
  const [date, setDate] = useState("");

  useMemo(() => {
    const lastPerformedDate = new Date(workout.lastPerformed).toLocaleDateString();
    setDate(lastPerformedDate);
  }, [workout.lastPerformed]);

  return (
    <div className="workout-card">
      <h3 className="workout-card__heading">{workout.name}</h3>
      <span className="workout-card__container">
        <h5 className="workout-card__subheading">Last Performed</h5>
        <CategoryTag content={date} />
      </span>
      <ul className="workout-card__list">
        {workout.exercises
          ? workout.exercises.map((exercise, index) => {
              return (
                <li key={`${exercise._id}${index}`} className="workout-card__list-item">
                  <span className="workout-card__exercise-set">
                    <p className="workout-card__exercise-content">{exercise.name}</p>
                    <p className="workout-card__exercise-content">({exercise.sets.length}) sets</p>
                  </span>
                </li>
              );
            })
          : null}
      </ul>
      <PrimaryButton content={"Start workout"} />
    </div>
  );
};
export default WorkoutCard;
