import PropTypes from "prop-types";

export const Input = ({ id, placeholder, type }) => (
  <input
    id={id}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder={placeholder}
    type={type}
  />
);

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password"]),
};

Input.defaultProps = {
  type: "text",
};
