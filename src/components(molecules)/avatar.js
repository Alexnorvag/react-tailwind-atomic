import clsx from "clsx";
import PropTypes from "prop-types";

import { Image } from "./common(atoms)/image";

const AvatarSize = {
  xs: "h-6",
  sm: "h-10",
  md: "h-20",
  lg: "h-36",
};

const AvatarShape = {
  rounded: "rounded",
  circle: "rounded-full",
  hexagon: "hexagon",
};

export const Avatar = ({ size, shape, outline, ...props }) => (
  <div
    className={clsx(
      "w-fit aspect-square overflow-hidden",
      AvatarSize[size],
      AvatarShape[shape],
      { "border-2 border-gray-300": outline && shape !== "hexagon" }
    )}
  >
    <Image {...props} />
  </div>
);

Avatar.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  shape: PropTypes.oneOf(["rounded", "circle", "hexagon"]),
  outline: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  size: "md",
  shape: "rounded",
  outline: false,
  src: "https://via.placeholder.com/60",
  alt: "avatar-placeholder",
};
