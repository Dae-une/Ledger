import { LedgerType } from '../types/types';

interface ChartData {
  id: string;
  value: number;
}

export const chageToChart = (data: LedgerType[]) => {
  const chartData: ChartData[] = [];
  data.map((list) => {
    const index = chartData.findIndex((data) => data.id === list.type);
    if (index < 0) {
      chartData.push({ id: list.type, value: list.price });
    } else {
      chartData[index].value += list.price;
    }
  });

  return chartData;
};
