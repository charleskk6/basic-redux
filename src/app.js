import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainContainer from "./components/container/MainContainer";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<MainContainer />, wrapper) : false;