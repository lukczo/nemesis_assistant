import { Link } from "react-router-dom";
import { useGlobalState } from "../../global-state";

export const Navigation = () => {
  const [language, setLanguage] = useGlobalState("language");

  return (
    <div>
      <button style={{ marginRight: 15 }}>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"test"}>Test</Link>
      </button>
      <button
        onClick={() =>
          setLanguage(language === "english" ? "polish" : "english")
        }
      >
        Change language
      </button>
    </div>
  );
};
