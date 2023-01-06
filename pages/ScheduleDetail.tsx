import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteSchedule, editSchedule, getSchedule } from '../api/Schedule';
import CalendarInput from '../components/Common/CalendarInput/CalendarInput';
import TextInput from '../components/Common/TextInput/TextInput';
import InfoModal from '../components/InfoModal/InfoModal';
import { ButtonWrap, GoBack, Header, TitleInput } from '../components/ScheduleRegist/styles';
import { ScheduleType } from '../types/types';

const ScheduleDetail = () => {
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  const [showdeleteInfoModal, setShowDeleteInfoModal] = useState(false);
  const [showErrorModal, setShowErroModal] = useState(false);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [desc, setDesc] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onDelete = useCallback(() => {
    if (id) {
      deleteSchedule(id);
      setShowDeleteInfoModal(true);
    }
  }, []);

  const onEdit = useCallback(() => {
    if (!id) return;
    if (!title || !title.trim() || !desc || !desc.trim()) {
      return setShowErroModal(true);
    }
    const [startYear, startMonth, startD] = startDate.split('-');
    const [endYear, endMonth, endD] = endDate.split('-');

    if (startMonth > endMonth || (startD > endD && startMonth <= endMonth)) {
      return setShowErroModal(true);
    }
    editSchedule(id, { title, desc, startDate: startD, endDate: endD, startMonth, startYear, endMonth, endYear });
    setShowEditInfoModal(true);
  }, [title, desc, startDate, endDate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = getSchedule(id);
        setDesc((await data).desc);
        setEndDate((await data).endDate);
        setStartDate((await data).startDate);
        setTitle((await data).title);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header>
        <GoBack onClick={goBack}>&lt;</GoBack>
        <span>상세</span>
      </Header>
      <TitleInput onChange={onChangeTitle} value={title} placeholder={title} />
      <CalendarInput label="시작" placeholder={startDate} value={startDate} setState={setStartDate} />
      <CalendarInput label="종료" placeholder={endDate} value={endDate} setState={setEndDate} />
      <TextInput label="상세" placeholder={desc} value={desc} setState={setDesc} />
      <ButtonWrap>
        <button onClick={onDelete}>삭제하기</button>
        <button onClick={onEdit}>수정하기</button>
      </ButtonWrap>
      {showEditInfoModal && (
        <InfoModal setShowModal={setShowEditInfoModal} message={'수정되었습니다.'} btnText={'확인'} linkTo={goBack} />
      )}
      {showdeleteInfoModal && (
        <InfoModal setShowModal={setShowDeleteInfoModal} message={'삭제되었습니다.'} btnText={'확인'} linkTo={goBack} />
      )}
      {showErrorModal && (
        <InfoModal setShowModal={setShowErroModal} message={'입력이 잘못되었습니다.'} btnText={'확인'} />
      )}
    </>
  );
};

export default ScheduleDetail;
