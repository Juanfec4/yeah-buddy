import TableRowEdit from "../tableRowEdit";

const TableBodyEdit = ({ sets, handleSetChange, handleDelete }) => {
  return (
    <tbody className="table-body">
      {sets.map((set, index) => {
        return (
          <TableRowEdit
            key={index}
            index={index}
            set={set}
            handleSetChange={handleSetChange}
            handleDelete={handleDelete}
          />
        );
      })}
    </tbody>
  );
};
export default TableBodyEdit;
