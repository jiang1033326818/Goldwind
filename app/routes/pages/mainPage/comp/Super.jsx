import React from 'react';
import {connect} from 'react-redux';
import styles from './Super.scss';
import Corner from './super/Corner.jsx';
import Title from './super/Title.jsx';
import Pie from './chart/Pie.jsx';

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
        
        return (
            <div className={styles.bodyBox}>

                <div className={styles.leftBox}>
                    <div className={styles.states}>
                         <Corner></Corner>
                         <Title>机组运行状态</Title>
                    </div>
                    <div className={styles.indexs}>
                        <Corner></Corner>
                        <Title>综合指标</Title>
                    </div>
                    <div className={styles.Speed}>
                        <Corner></Corner>
                        <Title>发电量完成情况</Title>
                    </div>
                    <div className={styles.Completion}>
                       <Corner></Corner>
                       <Title>发电量完成率</Title>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.chart_pie}>
                        <div className={styles.ehart}>
                            
                            <Title>日发电量统计</Title>
                            <Pie></Pie>
                            <Corner></Corner>
                        </div>
                        <div className={`${styles.spanL} ${styles.ehart}`}>
                            <Pie></Pie>
                            <Corner></Corner>
                            <Title>风机状态占比</Title>
                        </div>
                        <div className={styles.ehart}>
                            <Pie></Pie>
                            <Corner></Corner>
                            <Title>逆变器状态占比</Title>
                        </div>
                    </div>
                    <div className={styles.chart_bar}>
                        <Corner></Corner>
                        <Title>日功率曲线</Title>
                    </div>
                    <div className={styles.table}>
                        <Corner></Corner>
                        <Title>综合指标</Title>
                    </div>
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
            var obj = {
                test:''
            }
        }
        ,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
