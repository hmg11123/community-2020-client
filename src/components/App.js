import React from "react";
import MM00_V from "./screens/MM00_V"
import { Route } from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={MM00_V} />
            </div>
        );
    }
}

export default App;