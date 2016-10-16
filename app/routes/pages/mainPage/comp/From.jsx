import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');

import styles from './From.scss';

let data = require('../../../../../config/data');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {comp, buttonAction, inputOnChange, onFocus} = this.props;
        return (
            <div className={styles.bodyBox}>
                {
                    comp.map((value,key)=>{
                        if(value.type === 'input'){
                            return (
                                <div className={styles.inputBox} key={key}>
                                    <input placeholder={value.content} onChange={(e)=>inputOnChange(e.target.value, value.id)} onFocus={()=>onFocus}/>
                                </div>
                            )
                        } else if (value.type === 'button') {
                            return (
                                <div className={styles.inputBox} key={key}>
                                    <button placeholder={value.content} onClick={()=>buttonAction(value)}>{value.id}</button>
                                </div>
                            )
                        }
                    })
                }

            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        inputValue: state.objs.intellV2InputValue,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
        inputOnChange: (value, id)=>{
            console.log(value + '...' + id);

        },
        buttonAction: (value)=>{

            console.log(value);
            alert(data.data[value.id].data);
        },
        onFocus: ()=>{
            alert('我获取了焦点');
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
