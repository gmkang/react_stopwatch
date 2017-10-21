import React, { Component } from "react";

// Generic button component
// Props:
// - click: callback to run when the button is clicked
// - style: style object, using React's style format. Overrides default styles.

class Button extends Component {
  constructor(props) {
    super(props);
    // Just a little state to track whether the button is 
    // being hovered over.
    this.state = {
      hover: false
    };
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  // If this.props.style is provided, will use that. 
  // Otherwise will use defaults specified below.
  getStyle() {
    if (this.props.style) {
      return this.props.style;
    }
    const style = {
      padding: "8px 16px",
      background: "white",
      outline: "0px solid transparent",
      border: "1px solid black",
      fontSize: "1.5em",
      cursor: "pointer"
    };

    // Modify style if hovered over. 
    // We would use pseudoselectors for this normally, 
    // but those don't work for inline styles.
    if (this.state.hover) {
      style.background = "black";
      style.color = "white";
    }

    return style;
  }

  mouseIn() {
    this.setState({
      hover: true
    });
  }

  mouseOut() {
    this.setState({
      hover: false
    });
  }

  render() {
    return (
      <button
        style={this.getStyle()}
        onClick={this.props.click}
        onMouseEnter={this.mouseIn}
        onMouseLeave={this.mouseOut}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
