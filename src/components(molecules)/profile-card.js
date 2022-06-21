import clsx from "clsx";
import PropTypes from "prop-types";

import { Avatar } from "./common(atoms)/avatar";
import { Card } from "./common(atoms)/card";
import { Heading } from "./common(atoms)/heading";
import { Image } from "./common(atoms)/image";
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
        <Image
          classes="absolute inset-0 w-full aspect-video object-cover"
          src={cover}
          alt="cover"
        />
      )}

      <div className="flex flex-col w-fit items-center gap-4 z-10 bg-slate-200 bg-opacity-90 rounded-lg p-5">
        <Avatar size="lg" shape="hexagon" src={avatarSrc} alt="avatar" />

        <Heading level={3}>{title}</Heading>

        <Paragraph>{subtitile}</Paragraph>
      </div>
    </Card>
  );
};

ProfileCard.propTypes = {
  cover: PropTypes.string,
  avatarSrc: PropTypes.string,
  title: PropTypes.string,
  subtitile: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  center: PropTypes.bool,
};

ProfileCard.defaultProps = {
  title: "Name Surname",
  subtitile: "Short Description",
  size: "md",
  center: true,
};
