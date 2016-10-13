import React from 'react';
import {connect} from 'react-redux';

var actions = require('redux/actions');

import styles from './Header.scss';
import search from './../img/comp/search.png';
import icon from './../img/icon/cloudlink.png';
import down from './../img/comp/down.png';

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {headerInfo} = this.props;
        return (
            <div className={styles.navHeader}>
                <div className={styles.navIcon}>
                    <img src={icon}/>
                </div>
                <div className={styles.searchBox}>
                    <img src={search}/>
                    <input placeholder="Search for task, goals & reviews"/>
                </div>

                <div className={styles.methodBox}>
                    {
                        headerInfo.method.map((value,key) => {
                           return(
                               <img src={value.icon} key={key}/>
                           )
                        })
                    }
                </div>
                
                <div className={styles.userInfoBox}>
                    <img src={headerInfo.userinfo.header}/>
                    {headerInfo.userinfo.username}
                    <img className={styles.arrow} src={down}/>
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
