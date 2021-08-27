import React from 'react';
import { Bar } from 'react-chartjs-2';
import PageLayout from '../components/PageLayout';
import { NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import { useResultState } from '../ResultContext';
import { useAnswerState } from '../answerContext';
import { ProfileTables, JobTables, MajorTables } from '../components/Tables';
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
  const wonScore_arr = result.res[0]
    .sort(function (a, b) {
      return a[0] - b[0];
    })
    .slice(1);
  const jobs_arr = result.jobs;
  const majors_arr = result.majors;
  const name = answer.name;
  const startDtm = new Date(answer.startDtm).toLocaleDateString();
  const gender = answer.gender == '100323' ? '남' : '여';
  const profile_row_arr = ['이름', '성별', '검사일'];
  

  const data = {
    labels: wonScore_arr.map((numscore) => jobResItems[numscore[0]]),
    datasets: [
      {
        indexAxis: 'x',
        label: '',
        backgroundColor: '#6558f5',
        borderColor: '#b2acfa',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: wonScore_arr.map((numscore) => numscore[1]),
      },
    ],
  };

  return (
    <div>
      <PageLayout title="직업가치관검사 결과표">
        <hr></hr>
        <ProfileTables
          columns={profile_row_arr}
          values={[name, gender, startDtm]}
        />

        <h3>직업가치관 결과</h3>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: true }}
        />

        <h3>가치관과 관련이 높은 직업</h3>
        <div
          style={{
            backgroundColor: '#b2acfa',
            height: '5vh',
            textAlign: 'center',
            lineHeight: '5vh',
            opacity: '70%',
          }}
        >
          종사자 평균 학력별
        </div>

        <JobTables />

        <div
          style={{
            backgroundColor: '#b2acfa',
            height: '5vh',
            textAlign: 'center',
            lineHeight: '5vh',
            opacity: '70%',
          }}
        >
          종사자 평균 전공별
        </div>
        <MajorTables/>
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
