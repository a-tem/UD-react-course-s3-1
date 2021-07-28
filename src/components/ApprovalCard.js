import React from 'react';

const ApprovalCard = (props) => {
  console.log(props);

  return (
    <div className="border-2 border-gray-300 rounded-md w-1/3 mb-4">
      <div className="m-2 mb-3">{props.children}</div>

      <div className="p-2 flex border-t-2 border-gray-300">
        <button className="rounded-l-md bg-green-600 text-white font-semibold px-3 py-2 w-1/2">Approve</button>
        <button className="rounded-r-md bg-red-500 text-white font-semibold px-3 py-2 w-1/2">Reject</button>
      </div>
    </div>
  );
}

export default ApprovalCard;
