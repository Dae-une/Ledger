import React from 'react';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { ledgerData } from '../../mocks/data';
import { withRouter } from '../../tests/utils';
import LedgerList from '../LedgerList/LedgerList';

describe('LedgerList', () => {
  it('render correctly', async () => {
    const { asFragment } = render(withRouter(<Route path="/" element={<LedgerList list={ledgerData} />} />));

    expect(asFragment()).toMatchSnapshot();
  });

  it('리스트가 없으면 Empty화면을 보여준다.', () => {
    render(withRouter(<Route path="/" element={<LedgerList list={[]} />} />));

    expect(screen.getByText('내역이 없어요.'));
  });
});
