import "./styles.scss";

const TextInput = ({ value, handleChange, placeholder, label, id }) => {
  return (
    <span className="text-input__container">
      {label ? (
        <label htmlFor={id} className="text-input__label">
          {label}
        </label>
      ) : null}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="text-input__field"
      />
    </span>
  );
};

export default TextInput;
