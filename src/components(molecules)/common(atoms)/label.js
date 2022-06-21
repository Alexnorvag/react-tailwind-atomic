import PropTypes from "prop-types";

export const Label = ({ id, children }) => {
  return (
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
};

Label.defaultProps = {
  id: "",
};
