import React from 'react';

function KanbanCard({ title, priority, userId, status }) {
  return (
    <div className="card">
      <div className="bg-white p-4 mb-4 rounded shadow">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p>Status: {status}</p>
        <p>Priority: {priority}</p>
        <p>User: {userId}</p>
      </div>
    </div>
  );
}

export default KanbanCard;
