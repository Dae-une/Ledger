import { act, cleanup, render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import React from 'react';
import Header from '../Header';
import useDateStore from '../../store/useDateStore';

jest.mock('../../store/useDateStore', () => ({
  useDateStore: jest.fn(),
}));

const mockedDate = useDateStore as unknown as jest.MockedFn<typeof useDateStore>;

describe('Header ', () => {
  afterEach(cleanup);

  it('should render', () => {
    const baseDate = dayjs();
    mockedDate.mockImplementationOnce(() => {
      return {
        baseDate: dayjs(),
        addMonth: jest.fn(),
        subMonth: jest.fn(),
      };
    });

    render(<Header />);
    expect(screen.getByText(`${baseDate.get('year')}년 ${baseDate.get('month') + 1}월`)).toBeTruthy();
  });
});
