export interface LedgerType {
  type: '식사' | '구매' | '교통비' | '저축'
  desc: string;
  price: number;
  date: string;
}

export interface ScheduleType {
  title: string;
  desc: string;
  date: string;
}
