import React from 'react';
import { LedgerType } from '../../types/types';
import changeInPrice from '../../utils/changeInPrice';
import { Empty, ListStyle, ListWrap } from './styles';

interface Props {
  list: LedgerType[] | undefined;
}

const LedgerList = ({ list }: Props) => {
  if (!list?.length) {
    return <Empty>내역이 없어요.</Empty>;
  }
  return (
    <ListWrap>
      <ListStyle>
        <div>타입</div>
        <div>내역</div>
        <div>금액</div>
      </ListStyle>
      {list.map((data) => (
        <ListStyle key={data.desc}>
          <div>{data.type}</div>
          <div>{data.desc}</div>
          <div>{changeInPrice(data.price)}원</div>
        </ListStyle>
      ))}
    </ListWrap>
  );
};

export default LedgerList;
