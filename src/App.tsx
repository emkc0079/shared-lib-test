import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Text } from "my-shared-ui";

function App() {
  return (
    <div className="App">
      <Button label="Click Me" onClick={() => alert("Button Clicked")} />
      <Text label="this is text" />
    </div>
  );
}

export default App;
