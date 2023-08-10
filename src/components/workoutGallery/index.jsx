import WorkoutCard from "../workoutCard";
import "./styles.scss";

const WorkoutGallery = ({ workouts }) => {
  return (
    <div className="workout-gallery">
      {workouts
        ? workouts.map((workout) => {
            return <WorkoutCard key={workout._id} workout={workout} />;
          })
        : null}
    </div>
  );
};
export default WorkoutGallery;
