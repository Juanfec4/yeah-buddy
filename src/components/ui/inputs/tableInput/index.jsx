import "./styles.scss";
const TableInput = ({ value, handleChange, id }) => {
  return (
    <input
      type="text"
      value={value === 0 ? "" : value}
      onChange={handleChange}
      placeholder={id}
      id={id}
      className="table__input"
    />
  );
};
export default TableInput;
