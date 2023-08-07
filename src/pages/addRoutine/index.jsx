import "./styles.scss";
import { useEffect } from "react";
import useStore from "../../store/useStore";

import EditRoutine from "../../components/ui/forms/editRoutine";
const AddRoutinePage = () => {
  const fetchExercises = useStore((state) => state.fetchExercises);
  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="content">
      <EditRoutine />
    </div>
  );
};
export default AddRoutinePage;
