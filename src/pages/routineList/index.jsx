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
    <div className="routines-list">
      <h1 className="routines-list__heading">Routines</h1>
      <div className="routines-list__content">
        <RoutineGallery routines={plans.data} />
      </div>
    </div>
  );
};
export default RoutineListPage;
