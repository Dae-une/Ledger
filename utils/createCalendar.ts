import { Dayjs } from 'dayjs';

const createCalendar = (baseDate: Dayjs) => {
  const monthList = [];
  const WEEK = 7;
  const monthStart = baseDate.startOf('month');
  const monthEnd = baseDate.endOf('month');
  const startDay = monthStart.day();
  const endDate = monthEnd.date();
  const totalWeek = Math.ceil((startDay + endDate) / 7);

  for (let i = 1; i <= totalWeek; i++) {
    const weekList = [];
    if (i === 1) {
      const prevMonth = baseDate.subtract(1, 'month');
      for (let j = 1; j <= WEEK; j++) {
        let date;
        if (j <= startDay) {
          date = prevMonth.endOf('month').subtract(startDay - j, 'day');
        } else {
          date = monthStart.add(j - 1 - startDay, 'day');
        }
        weekList.push(date);
      }
    } else {
      const startDate = (i - 1) * WEEK;
      for (let j = startDate; j <= i * WEEK - 1; j++) {
        let date;
        if (j - startDay < endDate) {
          date = monthStart.add(j - startDay, 'day');
        } else {
          date = monthEnd.add(j - endDate - startDay + 1, 'day');
        }
        weekList.push(date);
      }
    }
    monthList.push(weekList);
  }

  return monthList;
};

export default createCalendar;
