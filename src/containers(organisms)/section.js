import PropTypes from "prop-types";
import clsx from "clsx";

const SectionSize = {
  sm: "py-6 px-4",
  md: "py-12 px-10",
  lg: "py-20 px-14",
};

const SectionColor = {
  default: "bg-slate-50",
  primary: "bg-blue-400",
  secondary: "bg-slate-700",
};

export const Section = ({ size, color, classes, children, ...props }) => {
  return (
    <section
      className={clsx(
        "md:container md:mx-auto",
        SectionSize[size],
        SectionColor[color]
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

Section.defaultProps = {
  size: "md",
  color: "default",
};
