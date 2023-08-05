import ListElement from "../ui/misc/listElement";

const ExerciseList = ({ exercises, handleAddClick }) => {
  return (
    <div className="exercise-list">
      {exercises
        ? exercises.map((exercise) => {
            return <ListElement element={exercise} handleAddClick={handleAddClick} />;
          })
        : null}
    </div>
  );
};
export default ExerciseList;
