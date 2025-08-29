
import { create } from "zustand";

const useFilterStore = create((set) => ({
  searchQuery: "",
  category: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (category) => set({ category: category }),
  clearFilters: () => set({ searchQuery: "", category: "" })
}));

export default useFilterStore;
