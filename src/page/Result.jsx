import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useAnswerState } from '../answerContext';
import { useResultDispatch } from '../ResultContext';
import { useResultState } from '../ResultContext';
import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';

const getJobs = (res1, res2) =>
  axios
    .get(
      `https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=${res1}&no2=${res2}`,
    )
    .then((res) => res.data)
    .then((jobs) => jobs.map((job) => job[1]));

const getMajors = (res1, res2) =>
  axios
    .get(
      `https://www.career.go.kr/inspct/api/psycho/value/majors?no1=${res1}&no2=${res2}`,
    )
    .then((res) => res.data)
    .then((data) => data.map((major) => major[1]));

const getWonScore = async (name, gender, answers) => {
  const wonScore = await axios
    .post(
      'https://www.career.go.kr/inspct/openapi/test/report',
      JSON.stringify({
        apikey: 'ca115d14dfa918dd56d9172eb0aac33c',
        qestrnSeq: '6',
        trgetSe: '100209',
        name,
        gender,
        grade: '',
        startDtm: Date.now(),
        answers,
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
    })
    .then((data) => data.map((score) => score.split('=')));
};

function useActions() {
  const dispatch = useResultDispatch();

  const setRes = (wonScoreArr, res1, res2) =>
    dispatch({ type: 'RES', payload: [wonScoreArr, res1, res2] });

  return { setRes };
}

export default function Result() {
  const t_data = useAnswerState();
  const dispatch = useResultDispatch();
  const result = useResultState();
  const { setRes } = useActions();

  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    const { name, gender, answers } = t_data;

    const wonScore_arr = await getWonScore(name, gender, answers);

    wonScore_arr.sort(function (a, b) {
      return b[1] - a[1];
    });

    const res1 = wonScore_arr[0][0];
    const res2 = wonScore_arr[1][0];
    setRes(wonScore_arr, res1, res2);

    const jobs_arr = await getJobs(res1, res2);
    dispatch({ type: 'JOBS', payload: jobs_arr });

    const majors_arr = await getMajors(res1, res2);
    dispatch({ type: 'MAJORS', payload: majors_arr });
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

  const wonScore_arr = result.wonScore_arr;
  const jobs_arr = result.jobs;
  const majors_arr = result.majors;
  const name = t_data.name;
  const top = jobResItems[result.res[1]];
  const second = jobResItems[result.res[2]];

  return (
    <PageLayout title="검사가 완료되었습니다.">
      <span>
        {name}님의 직업가치관은 {top},{second} 입니다.
      </span>
      <p>
        {jobs_arr[0]}과(와) {majors_arr[0]}에 적합합니다.
      </p>
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
