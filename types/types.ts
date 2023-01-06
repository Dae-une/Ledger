export interface LedgerType {
  id: string;
  type: string;
  desc: string;
  price: number;
  date: string;
}

export interface ScheduleType {
  id: string;
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
}
