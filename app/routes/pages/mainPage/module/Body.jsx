import React from 'react';
import {connect} from 'react-redux';
import styles from './Body.scss';
import Chart from '../comp/Chart.jsx';
import From from '../comp/From.jsx';
import Table from '../comp/Table.jsx';
import Super from '../comp/Super.jsx';
import Tab from './Tab.jsx';
import Tree from './Tree.jsx';
import Header from './Header.jsx';
var actions = require('redux/actions');
let page = require('../../../../../config/page');

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
        let {showPage, tabOpt, tab,} = this.props;
        return (
            <div className={styles.bodyBox}>
                <Tab tabOpt={tabOpt} tab={tab}/>
                {showPage === 'chart' && <Chart></Chart>}
                {showPage === 'from' && <From></From>}
                {showPage === 'table' && <Table></Table>}
                {showPage === 'super' && <Super></Super>}

            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        showPage: state.vars.showPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
