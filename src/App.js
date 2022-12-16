import "./scss/style.scss";
import RoutesIndex from "./routes";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import { CSSTransition } from "react-transition-group";
import FontFaceObserver from "fontfaceobserver";

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    (async () => {
      const Lovelace = new FontFaceObserver("Lovelace");
      const TheYoungest = new FontFaceObserver("TheYoungest");
      const Gilroy = new FontFaceObserver("Gilroy");
      await Lovelace.load();
      await TheYoungest.load();
      await Gilroy.load();
      setIsPageLoaded(true);
    })();
  }, []);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={!isPageLoaded}
        timeout={300}
        classNames={"preloader"}
        unmountOnExit
      >
        <PreLoader ref={nodeRef} />
      </CSSTransition>
      <div className="wrapper">
        <RoutesIndex />
      </div>
    </>
  );
}
