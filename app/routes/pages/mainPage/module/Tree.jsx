import React from 'react';
import {connect} from 'react-redux';

var actions = require('redux/actions');

import TreeItem from './TreeItem.jsx';
import styles from './Tree.scss';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {treeOpt, itemAct} = this.props;
        return (
            <div className={styles.navTree}>
                {treeOpt.map((value, i)=> {
                    return (
                        <TreeItem key={i} itemNum={i} item={value}></TreeItem>
                    )
                })}
            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        itemAct: state.vars.treeItemActive,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
