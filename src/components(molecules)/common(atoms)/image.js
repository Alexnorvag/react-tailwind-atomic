import PropTypes from "prop-types";
import clsx from "clsx";

export const Image = ({ src, alt, classes, ...props }) => (
  <img
    className={clsx("w-full object-cover", classes)}
    src={src}
    alt={alt}
    {...props}
  />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: "https://via.placeholder.com/150",
  alt: "placeholder",
};
