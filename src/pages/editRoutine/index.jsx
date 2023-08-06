import "./styles.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../store/useStore";
import EditRoutine from "../../components/ui/forms/editRoutine";
const EditRoutinePage = () => {
  const fetchExercises = useStore((state) => state.fetchExercises);
  useEffect(() => {
    fetchExercises();
  }, []);
  const location = useLocation();
  const routine = location?.state?.routine;

  return <EditRoutine targetRoutine={routine} />;
};
export default EditRoutinePage;
