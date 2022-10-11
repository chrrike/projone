import "./styles.css";
import GoFish from "./goFish/goFish.js";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GoFish />
      </div>
    );
  }
}
