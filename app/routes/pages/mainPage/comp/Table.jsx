import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');

import styles from './Chart.scss';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        return (
            <div className={styles.bodyBox}>
                Table
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
