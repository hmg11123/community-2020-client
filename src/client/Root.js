import React from "react";
import App from "../components/App"
import { HashRouter } from "react-router-dom";

class Root extends React.Component {
    render() {
        return (
            <HashRouter >
                <App />
            </HashRouter>
        );
    }
}

export default Root;