import { create } from 'zustand';

const useDiscoverDataStore = create((set) => ({
  data: [], // Initial state

  // Action to toggle the expanded state
  setData: (data) => set((state) => ({ data: data })),
}));

export default useDiscoverDataStore;
