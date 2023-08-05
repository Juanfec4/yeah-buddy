import ExerciseList from "../../../exerciseList";

import "./styles.scss";
const ListPopUp = ({ elementList, handleClose, handleAddExerciseToRoutine }) => {
  return (
    <div className="pop-up__container">
      <ExerciseList exercises={elementList} handleAddClick={handleAddExerciseToRoutine} />
    </div>
  );
};
export default ListPopUp;
