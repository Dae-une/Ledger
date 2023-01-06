// import React from 'react';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { Route } from 'react-router-dom';
// import useDateStore from '../../store/useDateStore';
// import { withRouter } from '../../tests/utils';
// import DateCell from '../DateCell/DateCell';
// import dayjs from 'dayjs';
// import { ledgerData } from '../../mocks/data';

// const originalState = useDateStore.getState();

// afterEach(() => {
//   useDateStore.setState(originalState);
// });

// describe('DateCell', () => {
//   it('날짜를 누르면 선택 날짜가 바뀐다.', () => {
//     const mockedDate = dayjs().add(3, 'day');
//     const { selectedDate, selectDate } = originalState;
//     const onClick = selectDate;
//     render(
//       withRouter(
//         <Route
//           path="/"
//           element={<DateCell date={mockedDate} onClick={onClick} isSelected={false} list={ledgerData} />}
//         />,
//       ),
//     );
//     const button = screen.getByTestId('DateCellBtn');
//     fireEvent.click(button);
//     expect(selectedDate).not.toEqual(mockedDate);
//   });
// });
