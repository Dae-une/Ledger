import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScheduleType } from '../../types/types';
import { Empty } from '../LedgerList/styles';
import { ListWrap, ListStyle } from './styles';

interface Props {
  list: ScheduleType[] | undefined;
}

const ScheduleList = ({ list }: Props) => {
  const navigate = useNavigate();

  const goDetail = useCallback((id: string) => {
    navigate(`/schedule/detail/${id}`);
  }, []);

  if (!list?.length) {
    return <Empty> 일정이 없어요.</Empty>;
  }

  return (
    <ListWrap>
      <ListStyle>
        <div>제목</div>
        <div>내용</div>
        <div>기간</div>
      </ListStyle>
      {list.map((data) => (
        <ListStyle key={data.title} onClick={() => goDetail(data.id)}>
          <div>{data.title}</div>
          <div>{data.desc}</div>
          <div>{`${data.startDate.substring(5)} ~ ${data.endDate.substring(5)}`}</div>
        </ListStyle>
      ))}
    </ListWrap>
  );
};

export default ScheduleList;
