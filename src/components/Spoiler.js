import React, { RefObject, useEffect, useRef, useState } from "react";

export function Spoiler(props) {
  const [className, setClassName] = useState(["spoiler"]);
  const [maxHeight, setMaxHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [styleSpoiler, setStyleSpoiler] = useState({});
  const spoilerBody = useRef();
  const spoilerTitle = useRef();
  useEffect(() => {
    if (props.isLoaded) {
      setMaxHeight(spoilerBody.current.clientHeight);
      setStyleSpoiler({ maxHeight: 0 });
      setIsOpen(false);
    }
  }, [props.isLoaded]);

  useEffect(() => {
    if (isOpen !== null) {
      isOpen
        ? spoilerTitle.current.classList.add("spoiler-open")
        : spoilerTitle.current.classList.remove("spoiler-open");
      isOpen
        ? setStyleSpoiler({ maxHeight })
        : setStyleSpoiler({ maxHeight: 0 });
    }
  }, [isOpen]);

  const handleSpolierClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={className.join(" ") + " " + props.spoilerClass}>
      <button
        ref={spoilerTitle}
        onClick={handleSpolierClick}
        className={"spoiler__title" + " " + props.titleClass}
      >
        <h2>{props.title}</h2>
        <span className="spoiler__open">
          <span></span>
          <span></span>
        </span>
      </button>
      <div
        ref={spoilerBody}
        style={styleSpoiler}
        className={"spoiler__content" + " " + props.contentClass}
      >
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Spoiler;
