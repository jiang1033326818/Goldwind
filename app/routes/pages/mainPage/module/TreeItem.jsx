import React from 'react';
import {connect} from 'react-redux';

var actions = require('redux/actions');

import styles from './TreeItem.scss';
import img from '../img/comp/search.png';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {item, itemNum, clickItem, itemAct} = this.props;
        return (
            <div className={itemNum === itemAct? styles.treeItemAct : styles.treeItem} onClick={()=>clickItem(item, itemNum)}>
                <div className={styles.treeIcon}>
                    {
                        itemNum === itemAct && <img src={item.iconActive}/>
                    }
                    {
                        itemNum != itemAct && <img src={item.iconNormal}/>
                    }
                </div>
                <div className={styles.treeMessage}>{item.title}</div>
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
        clickItem: (item, itemNum) => {
            dispatch(actions.setVars('treeItemActive', itemNum));
            dispatch(actions.setVars('treeItem', item));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
