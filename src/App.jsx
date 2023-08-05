import ActionButton from "./components/ui/buttons/actionButton";
import PrimaryButton from "./components/ui/buttons/primaryButton";
import SecondaryButton from "./components/ui/buttons/secondaryButton";

import editIcon from "./assets/icons/edit.svg";
import deleteIcon from "./assets/icons/trash-2.svg";
import confirmIcon from "./assets/icons/check-square.svg";
import "./styles/global.scss";
import TextInput from "./components/ui/inputs/textInput";
import SelectInput from "./components/ui/inputs/selectInput";
import EditExercise from "./components/ui/forms/editExercise";
import ExerciseCard from "./components/exerciseCard";

import useStore from "./store/useStore";
import { useEffect } from "react";
import ExerciseGallery from "./components/exerciseGallery";

const options = [
  { value: 1, text: "Option 1" },
  { value: 2, text: "Option 2" },
];

const categories = [
  { _id: "1", name: "body weight" },
  { _id: "2", name: "machine" },
  { _id: "3", name: "barbell" },
  { _id: "4", name: "dumbbell" },
];

const bodyParts = [
  { _id: "1", name: "arms" },
  { _id: "2", name: "legs" },
  { _id: "3", name: "chest" },
  { _id: "4", name: "back" },
];

const testExercise = {
  name: "Bench Press", //String
  category: "barbell", //ID
  bodyPart: "chest", //ID
  sets: [
    {
      weight: 100,
      reps: 8,
    },
    {
      weight: 100,
      reps: 8,
    },
    {
      weight: 100,
      reps: 8,
    },
  ], //Objects {weight: Number, reps: Number}
};
function App() {
  const { fetchCategories, fetchBodyParts, fetchExercises } = useStore((state) => state);

  useEffect(() => {
    fetchCategories();
    fetchBodyParts();
    fetchExercises();
  }, []);

  return (
    <div id="test">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>Paragraph</p>
      <a href="">Link</a>
      <PrimaryButton content={"Primary"} />
      <SecondaryButton content={"Secondary"} />
      <ActionButton action={"edit"} iconSrc={editIcon} />
      <ActionButton action={"delete"} iconSrc={deleteIcon} />
      <ActionButton action={"confirm"} iconSrc={confirmIcon} />
    </div>
  );
}

export default App;
