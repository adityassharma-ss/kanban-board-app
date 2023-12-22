import React from 'react';
import KanbanCard from './KanbanCard';

function KanbanColumn({ title, tickets }) {
  return (
    <div className="flex flex-col p-4 border rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-col gap-4">
        {/* Render KanbanCard components for each ticket */}
        {tickets.map((ticket) => (
          <KanbanCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
