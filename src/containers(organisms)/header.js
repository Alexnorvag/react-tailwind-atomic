import PropTypes from "prop-types";
import clsx from "clsx";

import { Heading } from "../components(molecules)/common(atoms)/heading";
import { IconLink } from "../components(molecules)/icon-link";
import { Navigation } from "../components(molecules)/navigation";

export const Header = ({ position, links }) => (
  <header
    className={clsx("flex items-center py-3 px-6 bg-slate-100", position)}
  >
    <div className="flex-1">
      <IconLink icon="eye" iconSize={70} to="/" color="secondary">
        <Heading level={2}>RTAD</Heading>
      </IconLink>
    </div>

    <Navigation classes="flex-[3] gap-2 justify-evenly" links={links} />
  </header>
);

Header.propTypes = {
  position: PropTypes.oneOf(["relative", "absolute"]),
};

Header.defaultProps = {
  position: "relative",
};
