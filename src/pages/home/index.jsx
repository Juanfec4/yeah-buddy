import WorkoutGallery from "../../components/workoutGallery";
import useStore from "../../store/useStore";
import { useEffect } from "react";
import "./styles.scss";
const HomePage = () => {
  const { fetchPlans, plans } = useStore((state) => state);

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="workouts-page">
      <h2 className="workouts-page__heading">My Workouts</h2>
      <WorkoutGallery workouts={plans.data} />
    </div>
  );
};
export default HomePage;
