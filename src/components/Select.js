import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      height: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
  }
  wrapper = React.createRef();
  head = React.createRef();
  componentDidMount() {
    const height = this.wrapper.current?.getBoundingClientRect().height;
    this.setState((state) => {
      return (state.height = height);
    });
    this.wrapper.current?.setAttribute("style", `max-height:0px;`);
  }
  clickHandler(event) {
    this.setState(
      (state) => {
        return { open: !state.open };
      },
      () => {
        if (this.wrapper.current && this.state.open) {
          this.wrapper.current.setAttribute(
            "style",
            `max-height:${this.state.height}px;`
          );
          this.wrapper.current.parentElement.classList.add("open");
        } else if (this.wrapper.current && !this.state.open) {
          this.wrapper.current.setAttribute("style", `max-height:0px;`);
          this.wrapper.current.parentElement.classList.remove("open");
        }
      }
    );
  }
  selectHandler(event) {
    if (this.wrapper.current && this.head.current) {
      this.setState((state) => {
        return { open: !state.open };
      });
      this.wrapper.current.setAttribute("style", `max-height:0px;`);
      this.head.current.innerText = event.target.innerText;
      this.props.callback(event);
    }
  }

  render() {
    return (
      <div
        className={"select" + " " + this.props.className}
        id={"select-" + this.props.name}
        key={this.props.key}
      >
        <div
          ref={this.head}
          onClick={this.clickHandler}
          className="select__head"
        >
          {this.props.title}
        </div>
        <ul ref={this.wrapper} className="select__list">
          {this.props.items.map((item) => {
            return (
              <li
                onClick={this.selectHandler}
                data-name={this.props.name}
                data-value={item}
                className="select__option"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Select;
