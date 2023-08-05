import "./styles.scss";
const TableHead = ({ headings }) => {
  return (
    <thead className="table__head">
      <tr className="table__row--headings">
        {headings.map((heading, index) => {
          return (
            <th key={`${heading}_${index}`} className="table__heading">
              {heading}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
