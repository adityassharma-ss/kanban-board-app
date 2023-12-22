// src/App.js
import React, { useEffect } from 'react';
import { useStore } from './store';
import KanbanBoard from './components/KanbanBoard';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const { fetchData, grouping, sorting, toggleDarkMode, darkMode } = useStore();

  useEffect(() => {
    fetchData(); // fetch data on component mount
  }, [fetchData]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1 className="text-4xl font-bold text-white">Kanban Board</h1>
        <div className="flex-container">
          <div className="flex items-center">
            <label className="label-text text-white">Group by:</label>
            <select
              value={grouping}
              onChange={(e) => useStore.setState({ grouping: e.target.value })}
              className="select-grouping"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="label-text text-white">Sort by:</label>
            <select
              value={sorting}
              onChange={(e) => useStore.setState({ sorting: e.target.value })}
              className="select-sorting"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div className="dark-mode-button" onClick={toggleDarkMode}>
            {darkMode ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-white"></i>
            )}
          </div>
        </div>
      </header>
      <main className="main-content">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
