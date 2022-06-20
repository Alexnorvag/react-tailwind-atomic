import PropTypes from "prop-types";
import clsx from "clsx";

export const TableRow = ({ striped, filled, children }) => (
  <tr
    className={clsx({
      "bg-gray-200": filled,
      "hover:bg-yellow-50": striped,
    })}
  >
    {children}
  </tr>
);

TableRow.propTypes = {
  striped: PropTypes.bool,
  filled: PropTypes.bool,
};
