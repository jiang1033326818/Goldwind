import React from 'react';
import {connect} from 'react-redux';
import Tit from './Title.scss';


let Component = React.createClass({
    componentWillMount() {

    },

    render() {

       
        return (
           <div>
                <div className={Tit.titlep}>{this.props.children}</div>
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
