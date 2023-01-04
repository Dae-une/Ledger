import React from 'react';
import { LedgerType } from '../../types/types';
import changeInPrice from '../../utils/changeInPrice';
import { Empty, ListStyle, ListWrap, Total } from './styles';

interface Props {
  list: LedgerType[] | undefined;
}

const LedgerList = ({ list }: Props) => {
  const totalPrice = list?.reduce((acc, cur) => {
    return (acc += cur.price);
  }, 0);

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
      {totalPrice && (
        <Total>
          <span>총 금액 </span>
          <span>{changeInPrice(totalPrice)}원</span>
        </Total>
      )}
    </ListWrap>
  );
};

export default LedgerList;
