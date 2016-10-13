import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

import styles from './Chart.scss';

import Pie from './chart/Pie.jsx';
import Line from './chart/Line.jsx';
import Column from './chart/Column.jsx';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        return (
            <div className={styles.bodyBox}>
                <div className={styles.PieChartBox}>
                    <div className={styles.PieChart}>
                        <Pie></Pie>
                    </div>
                    <div className={styles.PieChart}>
                        <Pie></Pie>
                    </div>
                    <div className={styles.PieChart}>
                        <Pie></Pie>
                    </div>
                </div>
                <div className={styles.LineChartBox}>
                    <div className={styles.LineChart}>
                        <Line></Line>
                    </div>
                </div>
                <div className={styles.ColumnChartBox}>
                    <div className={styles.ColumnChart}>
                        <Column></Column>
                    </div>
                </div>
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
