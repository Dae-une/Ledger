import dayjs, { Dayjs } from 'dayjs';
import create from 'zustand';

interface DateStore {
  baseDate: Dayjs;
  addMonth: () => void;
  subMonth: () => void;
}

const useDateStore = create<DateStore>()((set, get) => ({
  baseDate: dayjs(),

  addMonth: () =>
    set((state) => ({
      baseDate: state.baseDate.add(1, 'month'),
    })),
  subMonth: () =>
    set((state) => ({
      baseDate: state.baseDate.subtract(1, 'month'),
    })),
}));

export default useDateStore;
