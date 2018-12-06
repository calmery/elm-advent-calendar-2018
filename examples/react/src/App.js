import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.state = {
      userId: 'calmery',
      value: '',
      disabled: false
    };
  }

  componentDidMount() {
    this.ref.current.addEventListener('load', this._onLoad.bind(this));
    this.ref.current.addEventListener('error', this._onError.bind(this));
  }

  render() {
    const { userId, value, disabled } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <elm-qiita-profile
            ref={this.ref}
            data-user-id={userId}
            onLoad={this._onLoad.bind(this)}
          />
          <div>
            <input
              type='text'
              value={value}
              disabled={disabled}
              onChange={this._onChange.bind(this)}
            />
            <button disabled={disabled} onClick={this._onClick.bind(this)}>
              Get
            </button>
          </div>
        </header>
      </div>
    );
  }

  _onLoad() {
    this.setState({ disabled: false });
  }

  _onError() {
    this.setState({ disabled: false });
  }

  // Input

  _onChange(event) {
    this.setState({ value: event.target.value });
  }

  // Button

  _onClick() {
    const { value } = this.state;

    this.setState({
      disabled: true,
      userId: value,
      value: ''
    });
  }
}

export default App;
