import PropTypes from "prop-types";
import { Heading } from "../components(molecules)/common(atoms)/heading";

import { ProfileCard } from "../components(molecules)/profile-card";
import { Header } from "../containers(organisms)/header";
import { Section } from "../containers(organisms)/section";

export const PrimaryLayout = ({
  page,
  cover,
  avatar,
  profileSize,
  title,
  subtitile,
}) => (
  <>
    <Header />

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
};

PrimaryLayout.defaultProps = {
  page: "Primary template",
  cover: "https://via.placeholder.com/200",
  avatar: "https://via.placeholder.com/70",
  title: "Name Surname",
  subtitile: "Short Description",
  profileSize: "sm",
  center: true,
};
