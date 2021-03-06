import React from 'react';
import {connect} from 'react-redux';
import styles from './Header.scss';
import icon from './../img/icon/cloudlink.png';
var actions = require('redux/actions');

let Component = React.createClass({
    render() {
        let {headerInfo, itemActive, changeHeaderItem} = this.props;
        return (
            <div className={styles.navHeader}>
                <div className={styles.navIcon}>
                    <img src={icon}/>
                </div>
                <div className={styles.methodBox}>
                    {
                        headerInfo.map((value, key) => {
                          
                            
                            return (
                                <div key={key} className={itemActive === key ? styles.itemBoxAct : styles.itemBox} onClick={()=>changeHeaderItem(key,value.subPage[0].page[0].page)}>
                                    <img src={itemActive === key ? value.iconActive : value.iconNormal}/>
                                    <span>{value.name}</span>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );

    }
});


const mapStateToProps = (state) => {
    return {
        itemActive: state.vars.headerItemActive,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeHeaderItem: (key,page) => {
            dispatch(actions.setVars('headerItemActive', key));
            dispatch(actions.setVars('treeItemActive', 0));
             dispatch(actions.setVars('showPage', page));
             dispatch(actions.setVars('tabItemActive', 0));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
