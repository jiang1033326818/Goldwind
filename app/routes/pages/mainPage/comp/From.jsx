import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');

import styles from './From.scss';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        return (
            <div className={styles.bodyBox}>
                <div className={styles.inputBox}>
                    <input placeholder="这是一个输入框"/>
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
