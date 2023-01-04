import create from 'zustand';

const useLedgerStore = create((set, get) => ({
  list: [],
}));
