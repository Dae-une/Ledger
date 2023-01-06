import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewSchedule } from '../../api/firebase';
import useDateStore from '../../store/useDateStore';
import InfoModal from '../InfoModal/InfoModal';
import MiniCalendar from '../MiniCalendar/MiniCalendar';
import { Header, GoBack, TitleInput, InputWrap, ButtonWrap } from './styles';

const ScheduleRegist = () => {
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showErrorModal, setShowErroModal] = useState(false);
  const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { baseDate } = useDateStore();
  const navigate = useNavigate();

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onChangeDesc = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
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
      <InputWrap>
        <label>시작</label>
        <input
          placeholder={baseDate.format('YYYY-MM-DD')}
          readOnly
          onClick={() => setShowStartCalendar(true)}
          value={startDate}
        />
      </InputWrap>
      {showStartCalendar && <MiniCalendar setDate={setStartDate} setShowCalendar={setShowStartCalendar} />}
      <InputWrap>
        <label>종료</label>
        <input
          placeholder={baseDate.format('YYYY-MM-DD')}
          readOnly
          onClick={() => setShowEndCalendar(true)}
          value={endDate}
        />
      </InputWrap>
      {showEndCalendar && <MiniCalendar setDate={setEndDate} setShowCalendar={setShowEndCalendar} />}
      <InputWrap>
        <label>상세</label>
        <input placeholder="상세 내역을 입력해주세요." onChange={onChangeDesc} />
      </InputWrap>
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
