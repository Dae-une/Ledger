import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewSchedule } from '../../api/Schedule';
import CalendarInput from '../Common/CalendarInput/CalendarInput';
import TextInput from '../Common/TextInput/TextInput';
import InfoModal from '../InfoModal/InfoModal';
import { Header, GoBack, TitleInput, ButtonWrap } from './styles';

const ScheduleRegist = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showErrorModal, setShowErroModal] = useState(false);
  const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (!title || !title.trim() || !desc || !desc.trim()) {
      return setShowErroModal(true);
    }
    const [startYear, startMonth, startD] = startDate.split('-');
    const [endYear, endMonth, endD] = endDate.split('-');

    if (startMonth > endMonth || (startD > endD && startMonth <= endMonth)) {
      return setShowErroModal(true);
    }
    addNewSchedule({ title, desc, startDate: startD, endDate: endD, startMonth, startYear, endMonth, endYear });
    setShowInfoModal(true);
  }, [title, desc, startDate, endDate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <>
      <Header>
        <GoBack onClick={goBack}>&lt;</GoBack>
        <span>새로운 일정</span>
      </Header>
      <TitleInput placeholder="제목을 입력해주세요." onChange={onChangeTitle} />
      <CalendarInput label="시작" placeholder={startDate} setState={setStartDate} value={startDate} />
      <CalendarInput label="종료" placeholder={endDate} setState={setEndDate} value={endDate} />
      <TextInput label={'상세'} placeholder={'상세 내역을 입력해주세요.'} value={desc} setState={setDesc} />
      <ButtonWrap>
        <button onClick={goBack}>취소하기</button>
        <button onClick={onSubmit}>저장하기</button>
      </ButtonWrap>
      {showInfoModal && (
        <InfoModal setShowModal={setShowInfoModal} message={'등록되었습니다.'} btnText={'확인'} linkTo={goBack} />
      )}
      {showErrorModal && (
        <InfoModal setShowModal={setShowErroModal} message={'입력이 잘못되었습니다.'} btnText={'확인'} />
      )}
    </>
  );
};

export default ScheduleRegist;
