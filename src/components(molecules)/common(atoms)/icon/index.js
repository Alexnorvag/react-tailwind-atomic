import clsx from "clsx";
import PropTypes from "prop-types";

export const Icon = ({ name, size, atEnd, classes, ...props }) => {
  const IconPath = require(`./icons/${name}`).default;

  const classProps = clsx(
    "inline-block w-fit aspect-square max-h-full",
    { "order-last": atEnd },
    classes
  );

  return (
    <span className={classProps} style={{ height: `${size}px` }} {...props}>
      <IconPath />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  name: "question",
  size: 24,
};
