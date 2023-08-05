import PrimaryButton from "../../buttons/primaryButton";
import CategoryTag from "../categoryTag";

import "./styles.scss";
const ListElement = ({
  element,
  handleAddClick,
  handleRemoveClick,
  elementIndex,
  draggableProps,
  dragHandleProps,
  innerRef,
}) => {
  const handleAddElement = (e) => {
    e.preventDefault();
    handleAddClick(element);
  };

  const handleRemoveElement = (e) => {
    e.preventDefault();
    handleRemoveClick(element, elementIndex);
  };
  return (
    <div
      className="list-element__container"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <h4 className="list-element__heading">{element.name}</h4>
      <span className="list-element__tag-container">
        <CategoryTag content={element.category} />
        <CategoryTag content={element.bodyPart} />
      </span>
      {element.sets
        ? element.sets.map((set, index) => {
            return (
              <span className="list-element__set">
                <p className="list-element__set-data--number">{index + 1}</p>
                <p className="list-element__set-data--period">•</p>
                <p className="list-element__set-data">
                  ({set.weight} x {set.reps})
                </p>
              </span>
            );
          })
        : null}
      {handleRemoveClick ? (
        <PrimaryButton content={"Remove"} handleClick={handleRemoveElement} />
      ) : null}
      {handleAddClick ? <PrimaryButton content={"Add"} handleClick={handleAddElement} /> : null}
    </div>
  );
};
export default ListElement;
