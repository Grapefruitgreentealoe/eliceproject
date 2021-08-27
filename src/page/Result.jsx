import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useAnswerState } from '../answerContext';
import { useResultDispatch } from '../ResultContext';
import { useResultState } from '../ResultContext';
import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';

export default function Result() {
  const t_data = useAnswerState();
  const dispatch = useResultDispatch();
  const result = useResultState();

  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    const wonScore = await axios
      .post(
        'https://www.career.go.kr/inspct/openapi/test/report',

        JSON.stringify({
          apikey: 'ca115d14dfa918dd56d9172eb0aac33c',
          qestrnSeq: '6',
          trgetSe: '100209',
          name: t_data.name,
          gender: t_data.gender,
          grade: '',
          startDtm: Date.now(),
          answers: t_data.answers,
        }),
        {
          headers: { 'Content-Type': `application/json` },
        },
      )
      .then(async (res) => {
        const seq = res.data.RESULT.url.split('seq=')[1];
        return await axios
          .get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`)
          .then((res) => res.data.result.wonScore.split(' '));
      });

    const wonScore_arr = wonScore.map((score) => score.split('='));

    wonScore_arr.sort(function (a, b) {
      return b[1] - a[1];
    });
    const res1 = wonScore_arr[0][0];
    const res2 = wonScore_arr[1][0];

    dispatch({ type: 'RES', payload: [wonScore_arr, res1, res2] });

    const jobs = await axios.get(
      `https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=${res1}&no2=${res2}`,
    );
    const jobs_arr = jobs.data.map((job) => job.splice(1));

    dispatch({ type: 'JOBS', payload: jobs_arr });

    const majors = await axios.get(
      `https://www.career.go.kr/inspct/api/psycho/value/majors?no1=${res1}&no2=${res2}`,
    );
    const majors_arr = majors.data.map((major) => major.slice(1));

    dispatch({ type: 'MAJORS', payload: majors_arr });

    if (!wonScore_arr) return null;
  };
  const jobResItems = {
    1: '능력발휘',
    2: '자율성',
    3: '보수',
    4: '안정성',
    5: '사회적 인정',
    6: '사회봉사',
    7: '자기계발',
    8: '창의성',
  };



  
  const name = t_data.name;
  const top = jobResItems[result.res[1]];
  const second = jobResItems[result.res[2]];

  return (
    <PageLayout title="검사가 완료되었습니다.">
      <span>
        {name}님의 직업가치관은 {top},{second} 입니다.
      </span>
      <div className="navigation">
        <NextButton
          state="1"
          username="hi"
          presentURL="/fin"
          nextURL="/result"
          label="결과보기"
        />
      </div>
    </PageLayout>
  );
}
