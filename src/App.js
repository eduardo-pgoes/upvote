import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Greeting name="Edu"></Greeting>
    </div>
  );
}

class Greeting extends React.Component {
  render() {
    return (
      <h1 className="greeting text-3xl font-bold underline">
        Olá, {this.props.name}!!!
      </h1>
    );
  }
}

export default App;