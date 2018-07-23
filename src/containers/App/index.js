import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from './actions';
import logo from '../../images/logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.actions.getImages();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export const mapStateToProps = ({ app } ) => {
  return {
    images: app.images,
  };
};

export function mapDispatchToProps(dispatch: any): Object {
  const actions = bindActionCreators(
    { ...appActions },
    dispatch
  );
  return { actions };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

