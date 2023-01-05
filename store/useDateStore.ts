import dayjs, { Dayjs } from 'dayjs';
import create from 'zustand';

export interface DateStore {
  baseDate: Dayjs;
  selectedDate: Dayjs;
  addMonth: () => void;
  subMonth: () => void;
  selectDate: (date: Dayjs) => void;
}

const useDateStore = create<DateStore>()((set, get) => ({
  baseDate: dayjs(),
  selectedDate: dayjs(),

  addMonth: () =>
    set((state) => ({
      baseDate: state.baseDate.add(1, 'month'),
    })),
  subMonth: () =>
    set((state) => ({
      baseDate: state.baseDate.subtract(1, 'month'),
    })),
  selectDate: (date: Dayjs) =>
    set((state) => ({
      ...state,
      selectedDate: date,
    })),
}));

export default useDateStore;
