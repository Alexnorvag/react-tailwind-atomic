import PropTypes from "prop-types";

import { Link } from "./common(atoms)/link";
import { Icon } from "./common(atoms)/icon";

export const IconLink = ({ icon, iconSize, right, children, ...props }) => {
  const linkClassProps = {
    hasText: !!children,
    ...props,
  };

  return (
    <Link {...linkClassProps}>
      <Icon name={icon} size={iconSize} atEnd={right} />

      {children}
    </Link>
  );
};

IconLink.propTypes = {
  right: PropTypes.bool,
};

IconLink.defaultProps = {
  right: false,
};
