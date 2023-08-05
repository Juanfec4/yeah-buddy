import ActionButton from "./components/ui/buttons/actionButton";
import PrimaryButton from "./components/ui/buttons/primaryButton";
import SecondaryButton from "./components/ui/buttons/secondaryButton";

import editIcon from "./assets/icons/edit.svg";
import deleteIcon from "./assets/icons/trash-2.svg";
import confirmIcon from "./assets/icons/check-square.svg";
import "./styles/global.scss";

import useStore from "./store/useStore";
import { useEffect } from "react";
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
