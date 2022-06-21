import { PrimaryLayout } from "./layouts(templates)/primary";
import { PrivateLayout } from "./layouts(templates)/private";

function App() {
  return (
    <div className="App flex flex-col">
      <PrimaryLayout />

      <PrivateLayout />
    </div>
  );
}

export default App;
