import ActionButton from "../../buttons/actionButton";
import TableInput from "../../inputs/tableInput";
import deleteIcon from "../../../../assets/icons/trash-2.svg";
import "./styles.scss";

const TableRowEdit = ({ index, set, handleSetChange, handleDelete }) => {
  const handleDeleteByIndex = (e) => {
    e.preventDefault();
    handleDelete(index);
  };

  const handleChangeByIndex = (e) => {
    if (/[^0-9]/g.test(e.target.value)) {
      return;
    }
    if (e.target.id === "weight" || e.target.id === "reps") {
      handleSetChange(index, { ...set, [e.target.id]: Number(e.target.value) });
    }
  };

  return (
    <tr className="table-row">
      <td className="table-row__data">{index + 1}</td>
      <td className="table-row__data">
        <TableInput value={set.weight} handleChange={handleChangeByIndex} id={"weight"} />
      </td>
      <td className="table-row__data">
        <TableInput value={set.reps} handleChange={handleChangeByIndex} id={"reps"} />
      </td>
      <td className="table-row__action">
        <ActionButton action={"delete"} iconSrc={deleteIcon} handleClick={handleDeleteByIndex} />
      </td>
    </tr>
  );
};
export default TableRowEdit;
