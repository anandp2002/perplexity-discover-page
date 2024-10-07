import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  expanded: true, // Initial state

  // Action to toggle the expanded state
  toggleExpanded: () => set((state) => ({ expanded: !state.expanded })),
}));

export default useSidebarStore;
