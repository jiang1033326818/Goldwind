import React from 'react';
import {connect} from 'react-redux';
import styles from './Tab.scss';
var actions = require('redux/actions');

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },
    render() {
        let {tabOpt, tab, itemActive, changeTabItem} = this.props;
        return (
            <div className={styles.navTab}>
                {
                    tabOpt && tabOpt.subPage[tab].page.map((value, key)=> {
                      
                        return (
                            <div className={itemActive === key ? styles.tabItemAct : styles.tabItem} key={key}
                                 onClick={()=>changeTabItem(key,value.page)}>{value.name}</div>
                        )
                    })
                }
            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        itemActive: state.vars.tabItemActive,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(actions.setVars('tabItemActive', 0));
            dispatch(actions.setVars('showPage', 'chart'));
        },
        changeTabItem: (key, page) => {
            dispatch(actions.setVars('showPage', page));
            dispatch(actions.setVars('tabItemActive', key));
           
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
