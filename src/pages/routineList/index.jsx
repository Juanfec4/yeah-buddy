import { useEffect } from "react";
import useStore from "../../store/useStore";
import RoutineGallery from "../../components/routineGallery";
import "./styles.scss";
const RoutineListPage = () => {
  const { plans, fetchPlans } = useStore((state) => state);
  useEffect(() => {
    fetchPlans();
  }, []);
  return (
    <div className="routines-list-container">
      <h1>Routines</h1>
      <RoutineGallery routines={plans.data} />
    </div>
  );
};
export default RoutineListPage;
