import React, { Component } from "react";
import { render } from "react-dom";
import Profile from "./pages/Profile";
import "./style.css";
import PersonMock from "./mock/PersonMock";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  state = {
    name: "Root",
    person: PersonMock
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile person={this.state.person} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
