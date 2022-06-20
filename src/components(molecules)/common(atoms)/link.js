import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Anchor } from "./anchor";

export const Link = ({ hasText, activeClass, classes, ...props }) => {
  const { to } = props;
  const LinkComponent = to ? NavLink : Anchor;

  return (
    <LinkComponent
      className={({ isActive }) =>
        clsx(
          "flex w-min items-center gap-1 text-gray-700 font-bold no-underline hover:underline",
          {
            [activeClass]: activeClass && isActive,
          },
          classes
        )
      }
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
