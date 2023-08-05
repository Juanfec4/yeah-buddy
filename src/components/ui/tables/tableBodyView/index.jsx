import TableRowView from "../tableRowView";

const TableBodyView = ({ sets, inRoutine }) => {
  return (
    <tbody className="table-body">
      {sets
        ? sets.map((set, index) => {
            return <TableRowView key={index} index={index} set={set} inRoutine={inRoutine} />;
          })
        : null}
    </tbody>
  );
};
export default TableBodyView;
