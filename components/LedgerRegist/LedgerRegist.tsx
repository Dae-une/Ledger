import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewLedger } from '../../api/firebase';
import changeInPrice from '../../utils/changeInPrice';
import InfoModal from '../InfoModal/InfoModal';
import TextInput from '../Common/TextInput/TextInput';
import { Header, ButtonWrap, GoBack } from './styles';
import NumberInput from '../Common/NumberInput/NumberInput';
import CalendarInput from '../Common/CalendarInput/CalendarInput';

const LedgerRegist = () => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    const [year, month, iDate] = date.split('-');
    addNewLedger({ type, desc, price, year, month, date: iDate });
    setShowInfoModal(true);
  }, [type, date, desc, price]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <>
      <Header>
        <GoBack onClick={goBack}>&lt;</GoBack>
        <span>가계부 등록</span>
      </Header>
      <CalendarInput label="날짜" placeholder={date} setState={setDate} value={date} />
      <TextInput label={'내역'} placeholder={'상세 내역을 입력해주세요.'} value={desc} setState={setDesc} />
      <NumberInput label={'금액'} placeholder={'0'} value={changeInPrice(price)} setState={setPrice} />
      <TextInput label={'종류'} placeholder={'종류를 입력해주세요.'} value={type} setState={setType} />
      <ButtonWrap>
        <button onClick={goBack}>취소하기</button>
        <button onClick={onSubmit}>저장하기</button>
      </ButtonWrap>
      {showInfoModal && (
        <InfoModal setShowModal={setShowInfoModal} message={'등록되었습니다.'} btnText={'확인'} linkTo={goBack} />
      )}
    </>
  );
};

export default LedgerRegist;
