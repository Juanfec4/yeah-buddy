import ActionButton from "../../buttons/actionButton";
import completeIcon from "../../../../assets/icons/check-square.svg";
import { useState } from "react";

import "./styles.scss";
const TableRowView = ({ set, index, inRoutine }) => {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    setComplete(!complete);
  };

  return (
    <tr className={complete ? "table-row--complete" : "table-row"}>
      <td className="table-row__data">{index + 1}</td>
      <td className="table-row__data">{set.weight}</td>
      <td className="table-row__data">x</td>
      <td className="table-row__data">{set.reps}</td>
      {inRoutine ? (
        <td className="table-row__action--confirm">
          <ActionButton action={"confirm"} iconSrc={completeIcon} handleClick={handleComplete} />
        </td>
      ) : null}
    </tr>
  );
};
export default TableRowView;
