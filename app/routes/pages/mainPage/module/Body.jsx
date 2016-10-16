import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');

import styles from './Body.scss';

import Chart from '../comp/Chart.jsx';
import From from '../comp/From.jsx';
import Main from '../comp/Main.jsx';
import Table from '../comp/Table.jsx';

let page = require('../../../../../config/page');

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
        let {item,chart,from,table} = this.props;
        return (
            <div className={styles.bodyBox}>
                {item && item.page === 'chart' && <Chart></Chart>}
                {item && item.page === 'from' && <From comp={from}></From>}
                {item && item.page === 'main' && <Main></Main>}
                {item && item.page === 'table' && <Table></Table>}
            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        item: state.vars.treeItem,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(actions.setVars('treeItemActive', 2));
            dispatch(actions.setVars('treeItem', page.tree[2]));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
