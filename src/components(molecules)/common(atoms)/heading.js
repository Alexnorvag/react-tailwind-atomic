import React from "react";
import clsx from "clsx";

const HeadingClass = {
  1: "text-base",
  2: "text-xl",
  3: "text-2xl",
  4: "text-3xl",
  5: "text-4xl",
  6: "text-5xl",
};

export const Heading = ({ level, children, classes, ...props }) =>
  React.createElement(
    `h${level}`,
    {
      className: clsx(HeadingClass[level], classes),
      ...props,
    },
    children
  );

Heading.defaultProps = {
  level: 6,
};
