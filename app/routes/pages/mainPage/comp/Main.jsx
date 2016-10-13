import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');

import styles from './Chart.scss';

import Chart from './Chart';
import From from './From';
import Table from './Table';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        return (
            <div className={styles.bodyBox}>
                <Chart/>
                <From/>
                <Table/>
            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
