import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';
import { useResultState } from '../ResultContext';
import WonScore from '../results/wonscoreResult';
import { ResultProvider } from '../ResultContext';
import Job from '../results/jobResult'
import Major from '../results/majorResult';


export default function Result() {
  

  return (
    <PageLayout title="직업가치관검사 결과표">
      결과 페이지입니다.
      
        <ResultProvider>
        <WonScore/>
        <Job/>
        <Major/>
        </ResultProvider>
        
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
  );
}
