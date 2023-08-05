import { useEffect, useState, useRef, useMemo } from "react";
import "./styles.scss";
const SelectInput = ({ options, handleChange, label, id, selected }) => {
  const [option, setOption] = useState(selected ? selected : "disabled");

  useEffect(() => {
    if (option !== "disabled" && handleChange) {
      handleChange(option);
    }
  }, [option]);

  const handleChangeOption = (e) => {
    setOption(e.target.value);
  };

  //Memorize options to prevent re-rendering
  const memoizedOptions = useMemo(
    () =>
      options
        ? options.map((option) => {
            return (
              <option key={option.value} value={option.value} className="option-input__option">
                {option.text}
              </option>
            );
          })
        : null,
    [options]
  );

  return (
    <div className="option-input__container">
      {label ? (
        <label htmlFor={id} className="option-input__label">
          {label}
        </label>
      ) : null}
      <select
        name={id}
        id={id}
        onChange={handleChangeOption}
        className="option-input__select"
        value={option}
      >
        <option value="disabled" className="option-input__option" disabled>
          select
        </option>
        {memoizedOptions}
      </select>
    </div>
  );
};

export default SelectInput;
