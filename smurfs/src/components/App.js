import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        <SmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetching: state.fetching
})

export default connect(
    mapStateToProps,
    {
      addSmurf
    }
)(App);

// export default (App);