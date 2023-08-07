import ExerciseList from "../../../exerciseList";
import ExitButton from "../../buttons/exitButton";

import "./styles.scss";
const ListPopUp = ({ elementList, handleClose, handleAddExerciseToRoutine }) => {
  return (
    <div className="pop-up__box">
      <ExitButton innerClass={"exit__exercise-gallery"} handleClick={handleClose} />
      <h1 className="pop-up__title">Exercise Gallery</h1>
      <div className="pop-up__container">
        <ExerciseList exercises={elementList} handleAddClick={handleAddExerciseToRoutine} />
      </div>
    </div>
  );
};
export default ListPopUp;
