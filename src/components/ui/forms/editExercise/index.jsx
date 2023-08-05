import { useState, useMemo } from "react";
import useStore from "../../../../store/useStore";
import { useNavigate } from "react-router-dom";

import TextInput from "../../inputs/textInput";
import SelectInput from "../../inputs/selectInput";
import SetTable from "../../../setTable";
import PlaceholderButton from "../../buttons/placeholderButton";
import PrimaryButton from "../../buttons/primaryButton";

import "./styles.scss";
import finderHelpers from "../../../../utilities/helpers/finders";

const EditExercise = ({ muscleGroups, targetExercise }) => {
  const { patchExercise, postExercise, categories, bodyParts } = useStore((state) => state);
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(
    targetExercise
      ? targetExercise
      : {
          name: "", //String
          category: "", //ID
          bodyPart: "", //ID
          sets: [], //Objects {weight: Number, reps: Number}
        }
  );

  const handleCreateExercise = async (e) => {
    e.preventDefault();
    const categoryName = finderHelpers.findElementNameById(exercise.category, categories.data);
    const bodyPartName = finderHelpers.findElementNameById(exercise.bodyPart, bodyParts.data);
    const newExercise = { ...exercise, category: categoryName, bodyPart: bodyPartName };
    await postExercise(newExercise);
    navigate("../exercises");
  };

  const handleSaveExercise = async (e) => {
    e.preventDefault();
    await patchExercise(exercise);
    navigate("../exercises");
  };

  const handleNameChange = (e) => {
    setExercise({ ...exercise, name: e.target.value });
  };

  const handleCategoryChange = (categoryID) => {
    setExercise({ ...exercise, category: categoryID });
  };

  const handleBodyPartChange = (bodyPartID) => {
    setExercise({ ...exercise, bodyPart: bodyPartID });
  };

  const handleSetChange = (index, newSet) => {
    let newSetsArray = [...exercise.sets];
    newSetsArray[index] = newSet;
    setExercise({ ...exercise, sets: newSetsArray });
  };

  const handleDeleteSet = (index) => {
    setExercise({
      ...exercise,
      sets: exercise.sets.filter((_, i) => {
        return i !== index;
      }),
    });
  };

  const handleAddNewSet = (e) => {
    e.preventDefault();
    let newSet = { reps: 0, weight: 0 };
    if (exercise.sets.length) {
      newSet = exercise.sets[exercise.sets.length - 1];
    }
    setExercise({
      ...exercise,
      sets: [...exercise.sets, newSet],
    });
  };

  const categoryList = useMemo(() => {
    if (categories.data) {
      return categories.data.map((category) => {
        return { value: category._id, text: category.name };
      });
    }
  }, [categories.data]);

  const muscleGroupList = useMemo(() => {
    if (muscleGroups) {
      return muscleGroups.map((muscleGroup) => {
        return { value: muscleGroup._id, text: muscleGroup.name };
      });
    }
  }, [bodyParts.data]);

  return (
    <form className="edit-form">
      <h3 className="edit-form__heading">{exercise.name ? exercise.name : "New Exercise"}</h3>
      <span className="edit-form__inputs-container">
        <TextInput
          placeholder={"Ex. Bench Press"}
          label={"Name"}
          value={exercise.name}
          id={"exerciseName"}
          handleChange={handleNameChange}
        />
        <SelectInput
          label={"Category"}
          options={categoryList ? categoryList : []}
          id={"category"}
          handleChange={handleCategoryChange}
          selected={exercise.category ? exercise.category : undefined}
        />
        <SelectInput
          label={"Muscle group"}
          options={muscleGroupList ? muscleGroupList : []}
          id={"muscleGroup"}
          handleChange={handleBodyPartChange}
          selected={exercise.bodyPart ? exercise.bodyPart : undefined}
        />
      </span>
      {exercise.sets.length ? (
        <>
          <h3 className="edit-form__heading">Sets</h3>
          <SetTable
            sets={exercise.sets}
            handleSetChange={handleSetChange}
            handleDelete={handleDeleteSet}
          />
        </>
      ) : null}
      <span className="edit-form__buttons-container">
        <PlaceholderButton content={"Add Set"} handleClick={handleAddNewSet} />
        <PrimaryButton
          content={exercise.hasOwnProperty("_id") ? "Save" : "Create"}
          handleClick={exercise.hasOwnProperty("_id") ? handleSaveExercise : handleCreateExercise}
        />
      </span>
    </form>
  );
};

export default EditExercise;
