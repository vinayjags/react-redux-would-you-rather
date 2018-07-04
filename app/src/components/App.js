import React, { Component, Fragment } from 'react';
import LoadingBar from "react-redux-loading"
import Nav from "./Nav"
import { BrowserRouter as Router } from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <Nav />
                    <div className="App">
                        Would You rather
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App