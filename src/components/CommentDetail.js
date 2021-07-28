import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="flex flex-row">
      <div className="mr-2 w-48">
        <img className="rounded" alt="avatar" src={props.image} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="font-bold">{props.author}</div>
          <div className="text-gray-400">{props.date}</div>
        </div>
        <div className="">{props.comment}</div>
      </div>
    </div>
  );
}

export default CommentDetail;
