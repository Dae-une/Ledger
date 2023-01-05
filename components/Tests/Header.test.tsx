import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import React from 'react';
import Header from '../Header/Header';
import useDateStore from '../../store/useDateStore';
import { withRouter } from '../../tests/utils';
import { Route } from 'react-router-dom';

const originalState = useDateStore.getState();

afterEach(() => {
  useDateStore.setState(originalState);
});

describe('Header ', () => {
  it('should render', () => {
    render(withRouter(<Route path="/" element={<Header />} />));
    const { baseDate } = originalState;

    expect(screen.getByText(`${baseDate.get('year')}년 ${baseDate.get('month') + 1}월`)).toBeTruthy();
  });

  it('우측 버튼을 누르면 month가 증가 한다', () => {
    render(withRouter(<Route path="/" element={<Header />} />));
    const { baseDate } = originalState;
    const button = screen.getByTestId('rightArrow');
    fireEvent.click(button);
    const date = baseDate.add(1, 'month');

    expect(screen.getByText(`${date.get('year')}년 ${date.get('month') + 1}월`)).toBeTruthy();
  });

  it('좌측 버튼을 누르면 month가 증가 한다', () => {
    render(withRouter(<Route path="/" element={<Header />} />));
    const { baseDate } = originalState;
    const button = screen.getByTestId('leftArrow');
    fireEvent.click(button);
    const date = baseDate.subtract(1, 'month');

    expect(screen.getByText(`${date.get('year')}년 ${date.get('month') + 1}월`)).toBeTruthy();
  });

  it('프로필 페이지에선 헤더가 보이지 않는다.', async () => {
    const { container } = render(withRouter(<Route path="/profile" element={<Header />} />));

    await waitFor(() => {
      expect(container.childElementCount).toEqual(0);
    });
  });
});
