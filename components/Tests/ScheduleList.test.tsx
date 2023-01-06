// import React from 'react';
// import { screen, render } from '@testing-library/react';
// import { Route } from 'react-router-dom';
// import { withRouter } from '../../tests/utils';
// import { scheduleData } from '../../mocks/data';
// import ScheduleList from '../ScheduleList/ScheduleList';

// describe('ScheduleList', () => {
//   it('render correctly', async () => {
//     const { asFragment } = render(withRouter(<Route path="/" element={<ScheduleList list={scheduleData} />} />));

//     expect(asFragment()).toMatchSnapshot();
//   });

//   it('리스트가 없으면 Empty화면을 보여준다.', () => {
//     render(withRouter(<Route path="/" element={<ScheduleList list={[]} />} />));

//     expect(screen.getByText('일정이 없어요.'));
//   });
// });
