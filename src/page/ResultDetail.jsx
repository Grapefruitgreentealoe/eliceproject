import React from 'react';

import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import { useResultState } from '../ResultContext';
import { useAnswerState } from '../answerContext';

export default function ResultDetail() {
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
const wonScore_arr = result.res[0];
const jobs_arr = result.jobs;
const majors_arr = result.majors;

  return (
    
<div>
<PageLayout title="직업가치관검사 결과표">

{!wonScore_arr?"hi":wonScore_arr}
{jobs_arr}
{majors_arr}


<div className="navigation">
<NextButton
  state="1"
  username="hi"
  presentURL="/progress"
  nextURL="/"
  label="다시 검사하기"
/>
</div>
</PageLayout>
</div>
  );
}
