import clsx from "clsx";
import PropTypes from "prop-types";

import { Link } from "./common(atoms)/link";

export const Navigation = ({ links, classes, ...props }) => {
  return (
    <nav className={clsx("flex", classes)} {...props}>
      {links.map((link, linkIdx) => (
        <Link key={linkIdx} activeClass="text-red-300" {...link}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

Navigation.defaultProps = {
  links: [
    { to: "/", name: "Home" },
    { to: "/admin", name: "Admin" },
    { to: "/login", name: "Login" },
  ],
};
