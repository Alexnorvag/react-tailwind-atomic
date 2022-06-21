import PropTypes from "prop-types";
import clsx from "clsx";

const SectionSize = {
  xs: "py-24 px-14 sm:px-40",
  sm: "py-20 px-14",
  md: "py-12 px-10",
  lg: "py-6 px-4",
};

const SectionColor = {
  default: "bg-slate-50",
  primary: "bg-blue-400",
  secondary: "bg-slate-400",
};

export const Section = ({ size, color, classes, children, ...props }) => (
  <section
    className={clsx(
      "container mx-auto",
      SectionSize[size],
      SectionColor[color]
    )}
    {...props}
  >
    {children}
  </section>
);

Section.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

Section.defaultProps = {
  size: "md",
  color: "default",
};
