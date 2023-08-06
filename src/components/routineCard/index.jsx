import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryTag from "../ui/misc/categoryTag";
import ActionButton from "../ui/buttons/actionButton";
import useStore from "../../store/useStore";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/trash-2.svg";
import "./styles.scss";
const RoutineCard = ({ routine }) => {
  const deletePlan = useStore((state) => state.deletePlan);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useMemo(() => {
    const lastPerformedDate = new Date(routine.lastPerformed).toLocaleDateString();
    setDate(lastPerformedDate);
  }, [routine.lastPerformed]);

  const handleEditClick = () => {
    navigate("./edit", { state: { routine: routine } });
  };

  const handleDeleteClick = () => {
    deletePlan(routine._id);
  };
  return (
    <div className="routine-card">
      <span className="routine-card__box">
        <h3 className="routine-card__heading">{routine.name}</h3>
        <span className="exercise-card__buttons-container">
          <ActionButton action={"edit"} iconSrc={editIcon} handleClick={handleEditClick} />
          <ActionButton action={"delete"} iconSrc={deleteIcon} handleClick={handleDeleteClick} />
        </span>
      </span>
      <span>
        <CategoryTag content={date} />
      </span>
      <ul className="routine-card__list">
        {routine.exercises
          ? routine.exercises.map((exercise, index) => {
              return (
                <li key={`${exercise._id}${index}`} className="routine-card__list-item">
                  <span className="routine-card__list-item-information">
                    <p className="routine-card__text">{exercise.name}</p>
                    <p className="routine-card__text">({exercise.sets.length}) sets</p>
                  </span>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default RoutineCard;
