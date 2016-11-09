import React from 'react';
import {connect} from 'react-redux';
import style from './Corner.scss';


let Component = React.createClass({
    componentWillMount() {
    },

    render() {
       
        return (
           <div className={style.Cornerbox}>
            <span className={`${style.row} ${style.row1}`}></span>
            <span className={`${style.row} ${style.row2}`}></span>
            <span className={`${style.col} ${style.col2}`}></span>                    
            <span className={`${style.col} ${style.col1}`}></span>
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
