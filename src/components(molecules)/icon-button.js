import PropTypes from "prop-types";

import { Button } from "./common(atoms)/button";
import { Icon } from "./common(atoms)/icon";

export const IconButton = ({ icon, iconSize, children, right, ...props }) => {
  const buttonClassProps = {
    hasText: !!children,
    ...props,
  };

  return (
    <Button {...buttonClassProps}>
      <Icon name={icon} size={iconSize} atEnd={right} />

      {children}
    </Button>
  );
};

IconButton.propTypes = {
  right: PropTypes.bool,
};

IconButton.defaultProps = {
  right: false,
};
