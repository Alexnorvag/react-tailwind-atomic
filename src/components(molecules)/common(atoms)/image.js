import PropTypes from "prop-types";

export const Image = ({ src, alt, ...props }) => (
  <img className="w-full object-contain" src={src} alt={alt} {...props} />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: "https://via.placeholder.com/50",
  alt: "placeholder",
};
