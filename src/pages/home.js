import { PrimaryLayout } from "../layouts(templates)/primary";

import backgroundSrc from "../assets/images/background.jpg";
import avatarSrc from "../assets/images/avatar.jpg";

export const HomePage = () => {
  return (
    <PrimaryLayout
      page="Home Page"
      cover={backgroundSrc}
      avatar={avatarSrc}
      profileSize="md"
      title="Mister Crocodile"
      subtitile="Cold-blooded, green good-natured. He loves to sing while no one is listening."
    />
  );
};
