import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App'

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state,
  }
}

function mapDispatchToProps(dispatch) {
  console.log('the dispatch', dispatch);
  return bindActionCreators(actionCreators, dispatch);
}

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TestContainer;