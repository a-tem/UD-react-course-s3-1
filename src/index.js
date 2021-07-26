import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import faker from 'faker';

import CommentDetail from './components/CommentDetail';

const App = () => {
  return (
    <div>
      <CommentDetail author={faker.name.firstName()}
                     date={faker.date.past().toLocaleDateString()}
                     image={faker.image.avatar()}
                     comment={faker.lorem.sentences(3)}
      />
      <CommentDetail author={faker.name.firstName()}
                     date={faker.date.past().toLocaleDateString()}
                     image={faker.image.avatar()}
                     comment={faker.lorem.sentences(3)}
      />
      <CommentDetail author={faker.name.firstName()}
                     date={faker.date.past().toLocaleDateString()}
                     image={faker.image.avatar()}
                     comment={faker.lorem.sentences(3)}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
