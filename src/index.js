import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()}
                      date={faker.date.past().toLocaleDateString()}
                      image={faker.image.avatar()}
                      comment={faker.lorem.sentences(3)}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()}
                      date={faker.date.past().toLocaleDateString()}
                      image={faker.image.avatar()}
                      comment={faker.lorem.sentences(3)}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()}
                      date={faker.date.past().toLocaleDateString()}
                      image={faker.image.avatar()}
                      comment={faker.lorem.sentences(3)}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
