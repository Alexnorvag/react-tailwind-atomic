import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Anchor } from "./anchor";

const LinkColor = {
  default: "text-gray-700",
  secondary: "text-blue-400",
};

export const Link = ({ hasText, activeClass, color, classes, ...props }) => {
  const { to } = props;
  const LinkComponent = to ? NavLink : Anchor;

  return (
    <LinkComponent
      className={({ isActive }) =>
        clsx(
          "flex w-min items-center gap-1 font-bold no-underline hover:underline",
          `${activeClass && isActive ? activeClass : LinkColor[color]}`,
          classes
        )
      }
      {...props}
    />
  );
};

Link.propTypes = {
  to: PropTypes.string,
  color: PropTypes.oneOf(["default", "secondary"]),
};

Link.defaultProps = {
  href: "#",
  color: "default",
};
