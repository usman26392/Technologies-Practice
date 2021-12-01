
import { Component } from "react";
import "./Box.css";


class Box extends Component {
    render() {
      return (
          <div className="box-item">
              <h4 className="box-item-title">Hello {this.props.name}</h4>
              <p className="box-item-para">This is a paragraph</p>
          </div>
      );
    }
  }
  
  export default Box;
  