import PropTypes from "prop-types";

export const Input = ({ id, placeholder }) => (
  <input
    id={id}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder={placeholder}
    type="text"
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "",
  id: "",
};
