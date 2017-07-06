import React, { Component } from 'react';
import {Notes} from '../components'

class Foo extends Component {
  componentDidMount() {
    console.log('Foo componentDisMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Foo componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Foo componentWillUpdate', nextProps, nextState);
  }

  componentWillUnmount() {
    console.log('Foo componentWillUnmount');
  }

  render() {
    return <p>Foo!</p>
  }
}

class Bar extends Component {
  componentDidMount() {
    console.log('Bar componentDisMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Bar componentWillReceiveProps', nextProps)
  }

  render() {
    return <p>Bar!</p>
  }
}

class App extends Component {
  state = {
    div: true
  };

  componentDidMount() {
    console.log('App componentDisMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('App componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }

  handleClick = () => {
    this.setState(prevState => ({div: !prevState.div}))
  };

  getComponent = () => {
    const foo = <Foo a={1} b={2} c={3}/>;
    if (this.state.div) {
      return (
        <div>{foo}</div>
      )
    } else {
      return (
        <span>{foo}</span>
      )
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        {this.getComponent()}
        <Bar {...this.state}/>
        <br/>
        <br/>
        <h1>Should Component Update</h1>
        <Notes/>
      </div>
    );
  }
}

export default App;
