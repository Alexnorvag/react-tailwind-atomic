import PropTypes from "prop-types";
import clsx from "clsx";

export const Header = ({ position }) => {
  return (
    <header className={clsx(position)}>
      <nav>header</nav>
    </header>
  );
};

Header.propTypes = {
  position: PropTypes.oneOf(["relative", "absolute"]),
};

Header.defaultProps = {
  position: "relative",
};
