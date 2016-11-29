import React, { Component } from 'react';
import { connect } from 'react-redux';
import log from 'loglevel';
import { getField } from '../../ducks/main';

require("./styles.less");

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { field } = this.props;
        log.info(`app did mount! field is ${field}`);
    }
    render() {
        return (
            <div className="app-container" />
        );
    }
}

function mapStateToProps(state) {
    const { main } = state;
    return {
        field: getField(main)
    };
}

export default connect(
    mapStateToProps
)(App);
