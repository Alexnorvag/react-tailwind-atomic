import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Anchor } from "./anchor";

export const Link = ({ hasText, ...props }) => {
  const { to } = props;
  const LinkComponent = to ? NavLink : Anchor;

  return (
    <LinkComponent
      className="flex items-center gap-1 text-gray-700 font-bold no-underline hover:underline"
      {...props}
    />
  );
};

Link.propTypes = {
  to: PropTypes.string,
};

Link.defaultProps = {
  href: "#",
};
