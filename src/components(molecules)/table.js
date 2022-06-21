import PropTypes from "prop-types";
import clsx from "clsx";

import { TableCell } from "./common(atoms)/table-cell";
import { TableRow } from "./common(atoms)/table-row";

export const Table = ({ columns, rows, striped, classes, ...props }) => (
  <table className={clsx("w-full bg-white", classes)} {...props}>
    <thead>
      <TableRow>
        {columns.map((column, columnIdx) => (
          <TableCell key={columnIdx} heading>
            {column.title}
          </TableCell>
        ))}
      </TableRow>
    </thead>

    <tbody>
      {rows.map((row, rowIdx) => (
        <TableRow key={rowIdx} striped={striped} filled={rowIdx % 2 === 0}>
          {columns.map((column, columnIdx) => (
            <TableCell key={columnIdx}>{row[column.key]}</TableCell>
          ))}
        </TableRow>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, title: PropTypes.string })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  columns: [
    { key: "col_1", title: "Col 1" },
    { key: "col_2", title: "Col 2" },
  ],
  rows: [
    { col_1: "Cell_0_0", col_2: "Cell_0_1" },
    { col_1: "Cell_1_0", col_2: "Cell_1_1" },
    { col_1: "Cell_2_0", col_2: "Cell_2_1" },
  ],
};
