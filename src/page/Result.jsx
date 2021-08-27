import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
     const low1 = wonScore_arr[6][0];
      const low2 = wonScore_arr[7][0];

    dispatch({ type: 'RES', payload: [wonScore_arr, res1, res2,low1,low2] });

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
  const low1 = jobResItems[result.res[3]];
  const low2 = jobResItems[result.res[4]];


  return (
    <PageLayout title="검사가 완료되었습니다.">
      <div style={{ height: '100px' }}></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <span>
          직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과
          신념입니다.{' '}
          <p>
            따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을
            한다고 볼 수 있습니다.{' '}
          </p>
          <p>
            직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를
            중요하게 생각하는지를 알려줍니다.
          </p>
          또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에
          대해 생각해 볼 기회를 제공합니다.
          <p></p>
          직업생활과 관련하여 {name}님은 {top}(와)과 {second}(을)를 가장
          중요하게 생각합니다.
          <p>
            반면에, {low1},{low2}은 상대적으로 덜 중요하게 생각합니다.
          </p>
        </span>
      </div>
      <div style={{ height: '40px' }}></div>
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
