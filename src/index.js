import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return <div className="flex flex-col">
    <div>App component works</div>
    <div>Finally!</div>
  </div>
}

ReactDOM.render(<App />, document.querySelector('#root'));
