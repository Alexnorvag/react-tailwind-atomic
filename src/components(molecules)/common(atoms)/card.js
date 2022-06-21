import PropTypes from "prop-types";
import clsx from "clsx";

import { Heading } from "./heading";

const CardSize = {
  sm: "max-w-sm p-4",
  md: "max-w-md p-6",
  lg: "max-w-lg p-8",
};

export const Card = ({ size, center, children, classes }) => {
  const isEmpty = !children.flat().length;

  return (
    <div
      className={clsx(
        "flex flex-col w-full rounded overflow-hidden shadow-lg bg-white hover:bg-slate-50",
        CardSize[size],
        { "items-center text-center": center },
        { "p-6 sm:p-20 text-center": isEmpty },
        classes
      )}
    >
      {isEmpty ? <Heading level={4}>Is empty 👾</Heading> : children}
    </div>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  center: PropTypes.bool,
};

Card.defaultProps = {
  size: "md",
  center: false,
};
