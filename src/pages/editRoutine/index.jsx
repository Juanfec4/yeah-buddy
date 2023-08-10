import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../store/useStore";
import EditRoutine from "../../components/ui/forms/editRoutine";
import ExitButton from "../../components/ui/buttons/exitButton";
const EditRoutinePage = () => {
  const fetchExercises = useStore((state) => state.fetchExercises);
  const navigate = useNavigate();
  const location = useLocation();
  const routine = location?.state?.routine;

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleExit = () => {
    navigate("../routines");
  };
  return (
    <div className="content">
      <ExitButton innerClass={"exit__edit-routine"} handleClick={handleExit} />
      <EditRoutine targetRoutine={routine} />
    </div>
  );
};
export default EditRoutinePage;
