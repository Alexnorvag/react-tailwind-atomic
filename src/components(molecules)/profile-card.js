import clsx from "clsx";
import PropTypes from "prop-types";

import { Avatar } from "./common(atoms)/avatar";
import { Card } from "./common(atoms)/card";
import { Heading } from "./common(atoms)/heading";
import { Paragraph } from "./common(atoms)/paragraph";

const ProfileCardOffsetTop = {
  sm: "pt-28 rounded-sm",
  md: "pt-36 rounded-md",
  lg: "pt-44 rounded-lg",
};

export const ProfileCard = ({
  cover,
  avatarSrc,
  title,
  subtitile,
  classes,
  ...props
}) => {
  const { size } = props;

  return (
    <Card
      classes={clsx(
        "cursor-pointer m-4",
        { [`relative ${ProfileCardOffsetTop[size]}`]: cover },
        classes
      )}
      {...props}
    >
      {cover && (
        <img
          className="absolute inset-0 w-full aspect-video object-cover"
          src={cover}
          alt="cover"
        />
      )}

      <Avatar size="lg" shape="hexagon" src={avatarSrc} alt="avatar" />

      <Heading level={3}>{title}</Heading>

      <Paragraph>{subtitile}</Paragraph>
    </Card>
  );
};

ProfileCard.propTypes = {
  cover: PropTypes.string,
  avatarSrc: PropTypes.string,
  title: PropTypes.string,
  subtitile: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

ProfileCard.defaultProps = {
  title: "Name Surname",
  subtitile: "Short Description",
  size: "md",
};
