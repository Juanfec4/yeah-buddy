import ExerciseList from "../../../exerciseList";
import ExitButton from "../../buttons/exitButton";
import Filter from "../../../filter";
import arrayHelpers from "../../../../utilities/helpers/arrayHelpers";
import finders from "../../../../utilities/helpers/finders";
import "./styles.scss";
import useStore from "../../../../store/useStore";
import { useEffect, useState } from "react";
const ListPopUp = ({ elementList, handleClose, handleAddExerciseToRoutine }) => {
  const { categories, bodyParts } = useStore((state) => state);
  const [elements, setElements] = useState(elementList);

  const handleSearch = (data) => {
    setElements(arrayHelpers.filterSearch(data, "name", elementList));
  };

  const handleFilterBodyPart = (selected) => {
    let bodyPartName = finders.findElementNameById(selected, bodyParts.data);
    setElements(arrayHelpers.matchesBodyPart(bodyPartName, elementList));
  };

  const handleFilterCategory = (selected) => {
    let categoryName = finders.findElementNameById(selected, categories.data);
    setElements(arrayHelpers.matchesCategory(categoryName, elementList));
  };

  return (
    <div className="pop-up__box">
      <ExitButton innerClass={"exit__exercise-list"} handleClick={handleClose} />
      <h1 className="pop-up__title">Exercise List</h1>
      <div className="pop-up__container">
        <Filter
          handleSearch={handleSearch}
          handleFilterBodyPart={handleFilterBodyPart}
          handleFilterCategory={handleFilterCategory}
        />
      </div>
      <div className="pop-up__container">
        <ExerciseList exercises={elements} handleAddClick={handleAddExerciseToRoutine} />
      </div>
    </div>
  );
};
export default ListPopUp;
