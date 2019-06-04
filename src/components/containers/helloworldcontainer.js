import {connect} from 'react-redux';
import HelloWorld from '../panels/HelloWorld.jsx';
import {screenLoad} from '../../actions/commonactions';

const mapStateToProps = (state, ownProps) => {
    return {
        appState: state.appReducer.appState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onScreenload: () => {
            dispatch(screenLoad());
        }
    }
}

const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld)

export default HelloWorldContainer;