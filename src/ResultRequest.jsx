import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useAnswerState } from './answerContext';

function Questions() {
  const t_data = useAnswerState();
  const {
    loading,
    data: questions,
    error,
    reload,
  } = useAsync({
    promiseFn: getResult,
  });

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!questions) return null;

  async function getResult() {
    const result = await axios
      .post('https://www.career.go.kr/inspct/openapi/test/report', {
        apikey: 'ca115d14dfa918dd56d9172eb0aac33c',
        qestrnSeq: '6',
        trgetSe: '100209',
        name: t_data.name,
        gender: t_data.gender,
        grade: '',
        startDtm: Date.now(),
        answers: t_data.answers,
      })
      .then((res)=> axios.get(res.data.RESULT.url))
      .then((res) => res.data.result.wonScore.split(' '));

    return result;
  }

  return (
    
   
  );
}

export default Questions;
