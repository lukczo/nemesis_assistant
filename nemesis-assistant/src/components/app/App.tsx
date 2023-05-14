import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
