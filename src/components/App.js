import React from "react";
import MM00_V from "./screens/MM00_V";
import FreeBoard from "./screens/FreeBoard";
import DocsBoard from "./screens/DocsBoard";
import GallaryBoard from "./screens/GallaryBoard"
import Header from "./screens/Header";
import Write from "./screens/Write";
import Detail from "./screens/Detail";
import { Route } from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={Header} />
                <Route exact path="/" component={MM00_V} />
                <Route exact path="/freeboard" component={FreeBoard} />
                <Route exact path="/docsboard" component={DocsBoard} />
                <Route exact path="/gallaryboard" component={GallaryBoard} />
                <Route exact path="/write/:boardType" component={Write} />
                <Route exact path="/detail/:id" component={Detail} />
            </div>
        );
    }
}

export default App;