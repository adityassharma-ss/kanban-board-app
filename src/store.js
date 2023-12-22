// src/store.js
import create from 'zustand';
import { fetchData as fetchApiData } from './api';

export const useStore = create((set) => ({
  grouping: 'status', // default grouping
  sorting: 'priority', // default sorting
  tickets: [],
  users: [],
  fetchData: async () => {
    try {
      const { tickets, users } = await fetchApiData();
      set({ tickets, users });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  setTickets: (newTickets) => set({ tickets: newTickets }),
  setUsers: (newUsers) => set({ users: newUsers }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
