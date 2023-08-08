import React from "react";
import "./styles.css";

class Input extends React.Component {
  state = {
    campo: "",
  };

  render() {
    return (
      <div className="container">
        <div title="input">
          <div className="input">
            <div label="Campo: * ">
              <input
                type="campo"
                placeholder={this.props.placeholder} // Use o placeholder passado como prop
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;