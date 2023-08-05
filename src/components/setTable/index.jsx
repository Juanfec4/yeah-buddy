import "./styles.scss";
import TableHead from "../ui/tables/tableHead";
import TableBodyEdit from "../ui/tables/tableBodyEdit";

const SetTable = ({ sets, headings, handleSetChange, handleDelete }) => {
  return (
    <table className="set-table">
      <TableHead headings={headings ? headings : ["Set", "Weight", "Reps", " "]} />
      <TableBodyEdit sets={sets} handleSetChange={handleSetChange} handleDelete={handleDelete} />
    </table>
  );
};

export default SetTable;
