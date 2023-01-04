import axios, { AxiosRequestConfig } from 'axios';
import { LedgerType } from '../../types/types';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3095',
};
const client = axios.create(axiosConfig);

export const getLedger = async (date: string) => {
  const { data } = await client.post<LedgerType[]>('/ledger', date);
  return data;
};
