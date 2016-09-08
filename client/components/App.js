import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps (state) {
  return {
    players: state.players,
    categories: state.categories,
    gameState: state.gameState
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// magically bind the store/dispatch to our main component. MARVELOUS
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
