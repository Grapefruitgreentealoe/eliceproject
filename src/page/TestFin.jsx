import React from 'react';

import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import { useAnswerState } from '../answerContext';

export default function TestFin() {
  const data = useAnswerState();
  console.log(data.name);
  return (
    <PageLayout title="검사가 완료되었습니다.">
      검사가 완료되었습니다.
      {data.name}
      {data.gender}
      {data.answers}
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
