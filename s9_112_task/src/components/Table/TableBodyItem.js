
import "./Table.css";

const TableBodyItem = (props) => {


  return (
    <tr>
      <td>{props.tableItem.year}</td>
      <td>{props.tableItem.savingsEndOfYear}</td>
      <td>{props.tableItem.yearlyContribution}</td>
      <td>{props.tableItem.yearlyInterest}</td>
      <td>{props.tableItem.year}</td>
    </tr>
  );
};

export default TableBodyItem;
