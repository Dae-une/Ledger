import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LedgerType } from '../../types/types';
import changeInPrice from '../../utils/changeInPrice';
import { Empty, ListStyle, ListWrap, Total } from './styles';

interface Props {
  list: LedgerType[] | undefined;
}

const LedgerList = ({ list }: Props) => {
  const navigate = useNavigate();

  const totalPrice = list?.reduce((acc, cur) => {
    return (acc += cur.price);
  }, 0);

  const goDetail = useCallback((id: string) => {
    navigate(`/ledger/detail/${id}`);
  }, []);

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
        <ListStyle key={data.desc} onClick={() => goDetail(data.id)}>
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
