import React from 'react';

import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import { useResultState } from '../ResultContext';
import { useAnswerState } from '../answerContext';

export default function TestFin() {
  const result = useResultState();
  const answer = useAnswerState();
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
  const top = jobResItems[result.res[0]];
  const second = jobResItems[result.res[1]];
  const majors = result.majors;
  const jobs = result.jobs;
  console.log(majors,jobs);
  const name = answer.name;
  return (
    <PageLayout title="검사가 완료되었습니다.">
      <span>
      {name}님의 직업가치관은 {top},{second}  입니다.</span>
        <p>{jobs[0]}과 {majors[0]}에 적합합니다.</p>
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
