import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <button style={{ marginRight: 15 }}>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"test"}>Test</Link>
      </button>
    </div>
  );
};
