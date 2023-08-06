import RoutineCard from "../routineCard";
import Placeholder from "../ui/misc/placeholder";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const RoutineGallery = ({ routines }) => {
  const navigate = useNavigate();

  const handleNewRoutine = () => {
    navigate("./add");
  };
  return (
    <div className="routine-gallery">
      <Placeholder content={"create routine"} handleClick={handleNewRoutine} />
      {routines
        ? routines.map((routine) => {
            return <RoutineCard key={routine._id} routine={routine} />;
          })
        : null}
    </div>
  );
};
export default RoutineGallery;
