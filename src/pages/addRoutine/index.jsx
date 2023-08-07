import "./styles.scss";
import { useEffect } from "react";
import useStore from "../../store/useStore";
import { useNavigate } from "react-router-dom";
import EditRoutine from "../../components/ui/forms/editRoutine";
import ExitButton from "../../components/ui/buttons/exitButton";
const AddRoutinePage = () => {
  const fetchExercises = useStore((state) => state.fetchExercises);
  const navigate = useNavigate();
  useEffect(() => {
    fetchExercises();
  }, []);

  const handleExit = () => {
    navigate("../routines");
  };

  return (
    <div className="content">
      <ExitButton innerClass={"exit__add-routine"} handleClick={handleExit} />
      <EditRoutine />
    </div>
  );
};
export default AddRoutinePage;
