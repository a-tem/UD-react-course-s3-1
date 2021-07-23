import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import faker from 'faker';

const App = () => {
  return (
    <div className="flex flex-row w-1/3 mb-4">
      <div className="mr-2 w-48">
        <img className="rounded" alt="avatar" src={faker.image.avatar()} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="font-bold">{faker.name.firstName()}</div>
          <div className="text-gray-400">{faker.date.past().toLocaleDateString()}</div>
        </div>
        <div className="">{faker.lorem.sentences(3)}</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
