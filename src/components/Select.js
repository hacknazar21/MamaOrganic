import React, { useEffect, useState } from "react";

export default function Select({
  className,
  key,
  callback,
  name,
  title,
  items,
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const wrapper = React.createRef();
  const head = React.createRef();
  useEffect(() => {
    if (items?.length) {
      console.log(wrapper.current);
      const height = wrapper.current?.getBoundingClientRect().height;
      setHeight(height);
      wrapper.current?.setAttribute("style", `max-height:0px;`);
    }
  }, [JSON.stringify(items)]);
  useEffect(() => {
    if (wrapper.current && open) {
      wrapper.current.setAttribute("style", `max-height:${height}px;`);
      wrapper.current.parentElement.classList.add("open");
    } else if (wrapper.current && !open && items?.length) {
      wrapper.current.setAttribute("style", `max-height:0px;`);
      wrapper.current.parentElement.classList.remove("open");
    }
  }, [open]);
  function clickHandler(event) {
    setOpen((prevState) => !prevState);
  }
  function selectHandler(event) {
    if (wrapper.current && head.current) {
      setOpen((prevState) => !prevState);
      wrapper.current.setAttribute("style", `max-height:0px;`);
      head.current.innerText = event.target.innerText;
      callback(event);
    }
  }

  return (
    <div className={"select" + " " + className} id={"select-" + name} key={key}>
      <div ref={head} onClick={clickHandler} className="select__head">
        {title}
      </div>
      <ul ref={wrapper} className="select__list">
        {items?.map((item) => {
          return (
            <li
              key={key}
              onClick={selectHandler}
              data-name={name}
              data-value={item.value}
              className="select__option"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
