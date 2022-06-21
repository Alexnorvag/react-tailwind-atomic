import { Avatar } from "./components(molecules)/common(atoms)/avatar";
import { PrimaryLayout } from "./layouts(templates)/primary";

import avatarSrc from "./assets/images/avatar.jpg";

function App() {
  return (
    <div className="App flex flex-col">
      {/* <IconButton size="lg" right>
        Text + Right Icon
      </IconButton>

      <IconButton classes="gap-1" icon="eye" variant="outline" right>
        Outline Text + Right Icon
      </IconButton>

      <IconButton classes="gap-2" icon="check" iconSize='25' color="success">
        Success Text + Right Icon
      </IconButton>

      <IconButton icon="check" variant="outline" color="success">
        Success Text + Right Icon
      </IconButton>

      <IconButton icon="check" size="lg" iconSize={20}>
        Left Icon + Text
      </IconButton>

      <div className="flex items-center">
        <IconButton
          icon="check"
          iconSize="60"
          size="lg"
          variant="outline"
          color="success"
        />

        <IconButton icon="eye" iconSize="100" size="lg" />

        <IconButton icon="eye" size="sm" classes="gap-4" right>
          lol
        </IconButton>
      </div> */}

      {/* <Table striped /> */}

      {/* <Link>External empty link</Link>

      <Link href="https://github.com/Alexnorvag">External to my github</Link>

      <Link to="/home">Home</Link> */}

      {/* <IconLink icon="eye" iconSize={30} to="/home">
        Go to Home
      </IconLink>

      <IconLink /> */}

      <Avatar size="sm" shape="rounded" outline src={avatarSrc} alt="avatar" />

      <Avatar size="md" shape="circle" outline src={avatarSrc} alt="avatar" />

      <Avatar size="xs" shape="hexagon" outline src={avatarSrc} alt="avatar" />

      <Avatar size="lg" shape="hexagon" outline src={avatarSrc} alt="avatar" />

      <PrimaryLayout />
    </div>
  );
}

export default App;
