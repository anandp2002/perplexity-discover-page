import { create } from 'zustand';

const useDiscoverDataStore = create((set) => ({
  data: [],

  setData: (data) => set((state) => ({ data: data })),
}));

export default useDiscoverDataStore;
