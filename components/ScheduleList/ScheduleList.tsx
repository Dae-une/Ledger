import React from 'react';
import { ScheduleType } from '../../types/types';
import { Empty } from '../LedgerList/styles';
import { ListWrap, ListStyle } from './styles';

interface Props {
  list: ScheduleType[] | undefined;
}

const ScheduleList = ({ list }: Props) => {
  if (!list?.length) {
    return <Empty> 일정이 없어요.</Empty>;
  }

  return (
    <ListWrap>
      <ListStyle>
        <div>제목</div>
        <div>내용</div>
      </ListStyle>
      {list.map((data) => (
        <ListStyle>
          <div>{data.title}</div>
          <div>{data.desc}</div>
        </ListStyle>
      ))}
    </ListWrap>
  );
};

export default ScheduleList;
