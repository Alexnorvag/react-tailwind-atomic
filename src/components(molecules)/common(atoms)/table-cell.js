import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const TableCellClass = {
  th: "text-left p-2 px-3 bg-zinc-300",
  td: "text-left p-4",
};

export const TableCell = ({ heading, children, classes, ...props }) => {
  const headingElement = heading ? "th" : "td";

  return React.createElement(
    headingElement,
    {
      className: clsx(TableCellClass[headingElement], classes),
      ...props,
    },
    children
  );
};

TableCell.propTypes = {
  heading: PropTypes.bool,
};
