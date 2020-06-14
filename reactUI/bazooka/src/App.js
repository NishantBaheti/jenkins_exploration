import React, { Component } from "react";
import Table from "./table";

class App extends Component {
  render() {
    const characterData = [
      {
        key: "black",
        value: "hole",
      },
      {
        key: "cinnamon",
        value: "rolls",
      },
    ];

    return (
      <div className="container">
        <Table characterData={characterData} />
      </div>
    );
  }
}

export default App;
