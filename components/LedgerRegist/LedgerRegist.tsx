import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewLedger } from '../../api/firebase';
import changeInPrice from '../../utils/changeInPrice';
import MiniCalendar from '../MiniCalendar/MiniCalendar';
import { ModalHeader, InputWrap, ButtonWrap } from './styles';

const LedgerRegist = () => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

  const onChangePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const value = e.target.value.replace(regex, '');
    if (!value) {
      return setPrice(0);
    }
    setPrice(parseInt(value));
  }, []);

  const onChangeDesc = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  }, []);

  const onChangeType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  }, []);

  const onShowCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  const onSubmit = useCallback(() => {
    addNewLedger({ type, date, desc, price });
  }, [type, date, desc, price]);

  const onCancle = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <>
      <ModalHeader>가계부 등록</ModalHeader>
      <InputWrap>
        <label>날짜</label>
        <input placeholder={date} readOnly value={date} onClick={onShowCalendar} />
      </InputWrap>
      {showCalendar && <MiniCalendar setDate={setDate} setShowCalendar={setShowCalendar} />}
      <InputWrap>
        <label>내역</label>
        <textarea placeholder="상세 내역을 입력해주세요." onChange={onChangeDesc} />
      </InputWrap>
      <InputWrap>
        <label>금액</label>
        <input placeholder="0" value={changeInPrice(price)} onChange={onChangePrice} />
      </InputWrap>
      <InputWrap>
        <label>종류</label>
        <input placeholder="종류를 입력해주세요." value={type} onChange={onChangeType} />
      </InputWrap>
      <ButtonWrap>
        <button onClick={onCancle}>취소하기</button>
        <button onClick={onSubmit}>저장하기</button>
      </ButtonWrap>
    </>
  );
};

export default LedgerRegist;
