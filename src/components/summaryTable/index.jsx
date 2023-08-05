import TableBodyView from "../ui/tables/tableBodyView";
import TableHead from "../ui/tables/tableHead";

import "./styles.scss";
const SummaryTable = ({ sets, inRoutine }) => {
  return (
    <table className="summary-table">
      {inRoutine ? (
        <>
          <TableHead headings={["Set", "Weight", " ", "Reps", " "]} />
          <TableBodyView sets={sets} inRoutine={inRoutine} />
        </>
      ) : (
        <>
          <TableHead headings={["Set", "Weight", " ", "Reps"]} />
          <TableBodyView sets={sets} inRoutine={inRoutine} />
        </>
      )}
    </table>
  );
};
export default SummaryTable;
