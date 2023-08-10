import SummaryTable from "../summaryTable";
import ActionButton from "../ui/buttons/actionButton";
import CategoryTag from "../ui/misc/categoryTag";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/trash-2.svg";
import "./styles.scss";

import { useNavigate } from "react-router-dom";
import useStore from "../../store/useStore";
const ExerciseCard = ({ exercise, inRoutine }) => {
  const deleteExercise = useStore((state) => state.deleteExercise);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("./edit", { state: { exercise: exercise } });
  };

  const handleDeleteClick = () => {
    deleteExercise(exercise._id);
  };

  return (
    <div className="exercise-card">
      <div className="exercise-card__container">
        <h3 className="exercise-card__heading">{exercise.name}</h3>
        {!inRoutine ? (
          <span className="exercise-card__buttons-container">
            <ActionButton action={"edit"} iconSrc={editIcon} handleClick={handleEditClick} />
            <ActionButton action={"delete"} iconSrc={deleteIcon} handleClick={handleDeleteClick} />
          </span>
        ) : null}
      </div>
      <span className="exercise-card__container">
        <CategoryTag content={exercise.category} />
        <CategoryTag content={exercise.bodyPart} />
      </span>
      <h3 className="exercise-card__heading">Sets</h3>
      <SummaryTable sets={exercise.sets} inRoutine={inRoutine} />
    </div>
  );
};

export default ExerciseCard;
