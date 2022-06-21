import clsx from "clsx";
import PropTypes from "prop-types";

const ParagraphColor = {
  default: "text-gray-700",
  dark: "text-black",
  light: "text-white",
  primary: "text-blue-500",
};

export const Paragraph = ({ color, classes, indent, children, ...props }) => (
  <p
    className={clsx(
      "text-base",
      ParagraphColor[color],
      { "mb-4": indent },
      classes
    )}
    {...props}
  >
    {children}
  </p>
);

Paragraph.propTypes = {
  color: PropTypes.oneOf(["default", "dark", "light", "primary"]),
  indent: PropTypes.bool,
};

Paragraph.defaultProps = { color: "default", indent: false };
