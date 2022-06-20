import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const ButtonSize = {
  sm: "h-8 px-4 text-sm",
  md: "h-10 px-5",
  lg: "h-12 px-6 text-lg",
};

const ButtonVariant = {
  default: "rounded-sm",
  outline: "border rounded-lg",
};

const ButtonColor = {
  default:
    "text-gray-700 bg-ukranian-blue-50 hover:bg-ukranian-blue hover:text-gray-600",
  success:
    "text-gray-600 bg-green-50 border-green-700 hover:bg-green-800 hover:text-white",
};

export const Button = ({
  size,
  variant,
  color,
  hasText,
  disabled,
  classes,
  children,
  onClick,
  ...props
}) => {
  const classProps = clsx(
    "flex whitespace-nowrap items-center m-2 transition-colors duration-150 focus:shadow-outline",
    `${
      disabled
        ? "text-gray-400 bg-gray-100 border border-gray-400 cursor-default hover:bg-gray-200"
        : ButtonColor[color]
    }`,
    `${children ? "max-w-full w-auto" : "w-20"}`,
    { [ButtonSize[size]]: hasText },
    { "h-min rounded-full aspect-square justify-center": !hasText && children },
    ButtonVariant[variant],
    classes
  );

  return (
    <button className={classProps} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["default", "outline"]),
  color: PropTypes.oneOf(["default", "success"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: "md",
  variant: "default",
  color: "default",
  disabled: false,

  onClick: () => {},
};
