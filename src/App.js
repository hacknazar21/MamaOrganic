import "./scss/style.scss";
import RoutesIndex from "./routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <RoutesIndex />
      </div>
    </>
  );
}
