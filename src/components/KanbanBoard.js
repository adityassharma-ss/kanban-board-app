import React from 'react';
import { useStore } from '../store';
import KanbanColumn from './KanbanColumn';

function KanbanBoard() {
  const { grouping, sorting, tickets } = useStore();

  // Group tickets based on the selected grouping
  const groupedTickets = groupTicketsBy(grouping, tickets);

  // Sort tickets based on the selected sorting option
  const sortedTickets = sortTicketsBy(sorting, groupedTickets);

  return (
    <div className="flex justify-center p-8">
      {/* Render columns based on the sorted tickets */}
      {Object.entries(sortedTickets).map(([columnTitle, columnTickets]) => (
        <KanbanColumn key={columnTitle} title={columnTitle} tickets={columnTickets} />
      ))}
    </div>
  );
}

// Helper function to group tickets based on the selected grouping
const groupTicketsBy = (grouping, tickets) => {
  switch (grouping) {
    case 'status':
      return groupByStatus(tickets);
    case 'user':
      return groupByUser(tickets);
    case 'priority':
      return groupByPriority(tickets);
    default:
      return groupByStatus(tickets);
  }
};

// Helper function to sort tickets based on the selected sorting option
const sortTicketsBy = (sorting, groupedTickets) => {
  return Object.keys(groupedTickets).reduce((sorted, key) => {
    sorted[key] = sortTickets(groupedTickets[key], sorting);
    return sorted;
  }, {});
};

// Helper function to group tickets by status
const groupByStatus = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { status } = ticket;
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(ticket);
    return grouped;
  }, {});
};

// Helper function to group tickets by user
const groupByUser = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { userId } = ticket;
    if (!grouped[userId]) {
      grouped[userId] = [];
    }
    grouped[userId].push(ticket);
    return grouped;
  }, {});
};

// Helper function to group tickets by priority
const groupByPriority = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { priority } = ticket;
    if (!grouped[priority]) {
      grouped[priority] = [];
    }
    grouped[priority].push(ticket);
    return grouped;
  }, {});
};

// Helper function to sort tickets
const sortTickets = (tickets, sorting) => {
  switch (sorting) {
    case 'priority':
      return tickets.sort((a, b) => b.priority - a.priority);
    case 'title':
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};

export default KanbanBoard;
