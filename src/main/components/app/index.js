import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from "./styles.less";

import log from 'loglevel';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        log.info('app did mount');
    }
    render() {
        return (
            <div className="app-container"></div>
        );
    }
}

function mapStateToProps(state) {
    const { main } = state;
    return {

    };
}

export default connect(
    mapStateToProps
)(App);