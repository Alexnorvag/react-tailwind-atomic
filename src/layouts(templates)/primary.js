import PropTypes from "prop-types";

import { Header } from "../containers(organisms)/header";
import { Section } from "../containers(organisms)/section";
import { Heading } from "../components(molecules)/common(atoms)/heading";
import { ProfileCard } from "../components(molecules)/profile-card";

export const PrimaryLayout = ({
  page,
  cover,
  avatar,
  profileSize,
  title,
  subtitile,
  links,
}) => (
  <>
    <Header links={links} />

    <Section size="sm" classes="flex flex-col items-center gap-8">
      <Heading level={5} classes="text-center">
        {page}
      </Heading>

      <ProfileCard
        avatarSrc={avatar}
        cover={cover}
        size={profileSize}
        title={title}
        subtitile={subtitile}
      />
    </Section>
  </>
);

PrimaryLayout.propTypes = {
  cover: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  subtitile: PropTypes.string,
  profileSize: PropTypes.oneOf(["sm", "md", "lg"]),
  center: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

PrimaryLayout.defaultProps = {
  page: "Primary template",
  cover: "https://via.placeholder.com/200",
  avatar: "https://via.placeholder.com/70",
  title: "Name Surname",
  subtitile: "Short Description",
  profileSize: "sm",
  center: true,
  links: [
    { to: "/", name: "Home" },
    { to: "/admin", name: "Admin" },
    { to: "/login", name: "Logout" },
  ],
};
