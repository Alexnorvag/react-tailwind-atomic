import clsx from "clsx";
import PropTypes from "prop-types";

const CardSize = {
  sm: "max-w-sm p-4",
  md: "max-w-md p-6",
  lg: "max-w-lg p-8",
};

export const Card = ({ size, center, children, classes }) => (
  <div
    className={clsx(
      "flex flex-col w-full rounded overflow-hidden shadow-lg bg-white hover:bg-slate-50",
      CardSize[size],
      { "items-center text-center": center },
      classes
    )}
  >
    {children}
  </div>
);

Card.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  center: PropTypes.bool,
};

Card.defaultProps = {
  size: "md",
  center: false,
};
