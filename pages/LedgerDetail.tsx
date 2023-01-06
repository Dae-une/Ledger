import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteLedger, editLedger, getLedger } from '../api/Ledger';
import CalendarInput from '../components/Common/CalendarInput/CalendarInput';
import NumberInput from '../components/Common/NumberInput/NumberInput';
import TextInput from '../components/Common/TextInput/TextInput';
import InfoModal from '../components/InfoModal/InfoModal';
import { ButtonWrap, GoBack, Header } from '../components/LedgerRegist/styles';
import changeInPrice from '../utils/changeInPrice';

const LedgerDetail = () => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  const [showdeleteInfoModal, setShowDeleteInfoModal] = useState(false);
  const [showErrorModal, setShowErroModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const onDelete = useCallback(() => {
    if (id) {
      deleteLedger(id);
      setShowDeleteInfoModal(true);
    }
  }, []);

  const onEdit = useCallback(() => {
    if (!id) return;
    if (!desc || !desc.trim() || !type || !type.trim()) {
      return setShowErroModal(true);
    }
    const [year, month, iDate] = date.split('-');
    editLedger(id, { type, desc, price, year, month, date: iDate });
    setShowEditInfoModal(true);
  }, [type, date, desc, price]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = getLedger(id);
        setDesc((await data).desc);
        setDate((await data).date);
        setType((await data).type);
        setPrice((await data).price);
      }
    };
    getData();
  }, []);

  if (!date) {
    return null;
  }

  return (
    <>
      <Header>
        <GoBack onClick={goBack}>&lt;</GoBack>
        <span>상세</span>
      </Header>
      <CalendarInput label="날짜" placeholder={date} setState={setDate} value={date} />
      <TextInput label={'내역'} placeholder={desc} value={desc} setState={setDesc} />
      <NumberInput label={'금액'} placeholder={changeInPrice(price)} value={changeInPrice(price)} setState={setPrice} />
      <TextInput label={'종류'} placeholder={type} value={type} setState={setType} />
      <ButtonWrap>
        <button onClick={onDelete}>삭제하기</button>
        <button onClick={onEdit}>수정하기</button>
      </ButtonWrap>
      {showEditInfoModal && (
        <InfoModal setShowModal={setShowEditInfoModal} message={'수정되었어요.'} btnText={'확인'} linkTo={goBack} />
      )}
      {showdeleteInfoModal && (
        <InfoModal setShowModal={setShowDeleteInfoModal} message={'삭제되었어요.'} btnText={'확인'} linkTo={goBack} />
      )}
      {showErrorModal && (
        <InfoModal setShowModal={setShowErroModal} message={'입력하지 않은 곳이 있어요.'} btnText={'확인'} />
      )}
    </>
  );
};

export default LedgerDetail;
