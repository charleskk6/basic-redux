import React, { Component } from "react";
import TextField from "../presentational/TextField";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      result: "[Empty]"
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  handleTextChange(event) {
    this.setState({ textValue: event.target.value });
  }
  handleSubmit(event) {
    this.setState({ result: this.state.textValue}); 
  }
  render() {
    const { title, textValue, result } = this.state;
    return ([
      <hr key='break-line' />,
      <div key='result' id="result">{result}</div>,
      <hr key='break-line2' />,
      <form id="title-form" key='title-form'>        
        <TextField type="text" id="text-field" value={textValue} handleChange={this.handleTextChange} />        
      </form>,      
      <button type="submit" id="submit" onClick={this.handleSubmit} >Submit</button>
    ]);
  }
}
export default MainContainer;

