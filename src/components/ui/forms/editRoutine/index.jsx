import { useEffect, useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

import TextInput from "../../inputs/textInput";
import PlaceholderButton from "../../buttons/placeholderButton";
import useStore from "../../../../store/useStore";
import ListPopUp from "../../misc/listPopUp";
import ListElement from "../../misc/listElement";

import finderHelpers from "../../../../utilities/helpers/finders";
import "./styles.scss";
import PrimaryButton from "../../buttons/primaryButton";

const EditRoutine = ({ targetRoutine }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const { exercises, fetchExercises, postPlan } = useStore((state) => state);
  const [showListPopUp, setShowListPopUp] = useState(false);
  const [routine, setRoutine] = useState({
    name: "",
    exercises: [],
  });

  const handlePostPlan = async (e) => {
    e.preventDefault();
    await postPlan(routine);
    navigate("../routines");
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scroll({ top: document.body.offsetHeight, left: 0, behavior: "smooth" });
  };

  const handleNameChange = (e) => {
    setRoutine({ ...routine, name: e.target.value });
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    setShowListPopUp(true);
    scrollToTop();
  };

  const handleCloseListPopUp = () => {
    setShowListPopUp(false);
  };

  const handleAddExerciseToRoutine = (exercise) => {
    let newExercisesArray = [...routine.exercises];
    newExercisesArray.push(exercise);
    setRoutine({ ...routine, exercises: newExercisesArray });
    setShowListPopUp(false);
    scrollToBottom();
  };

  const handleRemoveExercise = (exercise, index) => {
    const newExercisesArray = finderHelpers.findAndDeleteByIdAndIndex(
      routine.exercises,
      index,
      exercise
    );

    setRoutine({
      ...routine,
      exercises: newExercisesArray,
    });
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(routine.exercises);
    const [reorderedItem] = routine.exercises.splice(result.source.index, 1);
    items.splice(result.destination.index, 1, reorderedItem);
    setRoutine({ ...routine, exercises: [...items] });
  };

  useEffect(() => {
    fetchExercises();
  }, [showListPopUp]);

  return (
    <div className="edit-routine__container" ref={ref}>
      {showListPopUp ? (
        <ListPopUp
          elementList={exercises.data}
          handleClose={handleCloseListPopUp}
          handleAddExerciseToRoutine={handleAddExerciseToRoutine}
        />
      ) : null}
      <form className="edit-routine">
        <h2 className="edit-routine__heading">{routine.name ? routine.name : "New Routine"}</h2>
        <TextInput
          placeholder={"Ex. Push day"}
          label={"name"}
          id={"routineName"}
          value={routine.name}
          handleChange={handleNameChange}
        />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="exercise-list">
            {(provided) => (
              <div
                className="edit-routine__draggable"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {routine.exercises
                  ? routine.exercises.map((exercise, index) => {
                      return (
                        <Draggable
                          key={`${exercise._id}${index}`}
                          draggableId={`${exercise._id}${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <ListElement
                              draggableProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                              innerRef={provided.innerRef}
                              element={exercise}
                              handleRemoveClick={handleRemoveExercise}
                              elementIndex={index}
                            />
                          )}
                        </Draggable>
                      );
                    })
                  : null}
                {provided.placeholder}
                <PlaceholderButton content={"Add Exercise"} handleClick={handleAddExercise} />
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <PrimaryButton content={"Create Routine"} handleClick={handlePostPlan} />
      </form>
    </div>
  );
};
export default EditRoutine;
