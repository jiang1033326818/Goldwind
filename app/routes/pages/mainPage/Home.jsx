import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import Header from './module/Header';
import Tree from './module/Tree';
import Body from './module/Body';
import FixedContent from '../../../components/common/FixedContent.jsx';

let page = require('../../../../config/page');
let comp = require('../../../../config/comp');
let tabaleData = require('../../../../config/table-data');

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },
    render() {
        return (
            <FixedContent mode="fullWidth" width={1920}>
                <Header headerInfo={page.header}></Header>
                <Tree treeOpt={page.tree}></Tree>
                <Body {...comp.comps}></Body>
            </FixedContent>
        );
    }
});

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: ()=>{
            dispatch(actions.setObjs('tableContent', tabaleData));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
