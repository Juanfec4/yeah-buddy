import WorkoutGallery from "../../components/workoutGallery";
import useStore from "../../store/useStore";
import { useEffect } from "react";
const HomePage = () => {
  const { fetchPlans, plans } = useStore((state) => state);

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div>
      <h2>My Workouts</h2>
      <WorkoutGallery workouts={plans.data} />
    </div>
  );
};
export default HomePage;
