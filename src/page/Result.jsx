import React from 'react';
import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';
import WonScore from '../results/wonscoreResult';
import Job from '../results/jobResult'
import Major from '../results/majorResult';


export default function Result() {


  return (
    <PageLayout title="직업가치관검사 결과표">
      
      
       
        <WonScore/>
        <Job/>
        <Major/>
 
        
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
