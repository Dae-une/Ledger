import { rest } from 'msw';
import { ledgerData, scheduleData } from './data';

export const handlers = [
  rest.post('http://localhost:3095/ledger', async (req, res, ctx) => {
    const data = await req.text();
    const [year, month, date] = data.split('-');
    const returnData = ledgerData.filter((ledger) => {
      const [dYear, dMonth, dDate] = ledger.date.split('-');
      return dYear === year && month === dMonth;
    });

    if (!returnData.length) {
      return res(ctx.status(401));
    }
    return res(ctx.status(200), ctx.json(returnData));
  }),

  rest.post('http://localhost:3095/schedule', async (req, res, ctx) => {
    const data = await req.text();
    const [year, month, date] = data.split('-');

    const returnData = scheduleData.filter((schedule) => {
      const [dYear, dMonth, dDate] = schedule.date.split('-');
      return dYear === year && month === dMonth;
    });

    if (!returnData.length) {
      return res(ctx.status(401));
    }
    return res(ctx.status(200), ctx.json(returnData));
  }),
];
