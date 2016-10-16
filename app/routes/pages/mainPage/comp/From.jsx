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
                    comp.map((value, key)=> {
                        if (value.type === 'input') {
                            return (
                                <div className={styles.fromBox} key={key}>
                                    <input placeholder={value.content}
                                           onChange={(e)=>inputOnChange(e.target.value, value.id)}
                                           onFocus={()=>onFocus}/>
                                </div>
                            )
                        } else if (value.type === 'button') {
                            return (
                                <div className={styles.fromBox} key={key}>
                                    <button placeholder={value.content}
                                            onClick={()=>buttonAction(value)}>{value.id}</button>
                                </div>
                            )
                        } else if (value.type === 'date') {
                            return (
                                <div className={styles.fromBox} key={key}>
                                    <input placeholder={value.content} type='date'/>
                                </div>
                            )
                        } else if (value.type === 'chcekBox') {
                            return (
                                <div className={styles.fromBox} key={key}>
                                    <input placeholder={value.content} type='checkbox' style={{fontSize:30}}/>{value.id}
                                </div>
                            )
                        } else if (value.type === 'select') {
                            return (
                                <div className={styles.fromBox} key={key}>
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            )
                        } else if (value.type === 'textarea') {
                            return (
                                <div className={styles.fromBox} key={key}>
                                    <textarea rows="3" cols="20" style={{resize:'none'}}>
                                    在w3school，你可以找到你所需要的所有的网站建设教程。
                                    </textarea>
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
        inputOnChange: (value, id)=> {
            console.log(value + '...' + id);

        },
        buttonAction: (value)=> {

            console.log(value);
            alert(data.data[value.id].data);
        },
        onFocus: ()=> {
            alert('我获取了焦点');
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
