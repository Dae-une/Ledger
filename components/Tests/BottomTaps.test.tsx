import { render, screen } from '@testing-library/react';
import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from '../../tests/utils';
import BottomTaps, { BottomTapsLinks } from '../BottomTaps/BottomTaps';

describe('BottomTaps', () => {
  test('should link', () => {
    render(withRouter(<Route path="/" element={<BottomTaps />} />));

    const links: HTMLAnchorElement[] = screen.getAllByRole('link');

    expect(links[0].href).toContain(`${BottomTapsLinks[0].path}`);
    expect(links[1].href).toContain(`${BottomTapsLinks[1].path}`);
    expect(links[2].href).toContain(`${BottomTapsLinks[2].path}`);
  });
});
