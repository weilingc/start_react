import TableBodyItem from "./TableBodyItem";
import TableHeader from "./TableHeader";

import "./Table.css";

// 這邊map看看
const TableBody = (props) => {
    return (
      <table className="result">
        <TableHeader></TableHeader>
        <tbody>
          {props.tableData.map((item) => (
            <TableBodyItem tableItem={item}></TableBodyItem>
          ))}
        </tbody>
      </table>
    );

};

export default TableBody;
