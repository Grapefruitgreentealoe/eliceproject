import React, { useState } from 'react';

import PageLayout from '../components/PageLayout';
import { RadioInput } from '../components/RadioInput';
import { NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function TestExample() {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <PageLayout title="검사예시">
        <div>0%</div>
        <ProgressBar now={0} />
        <br />
        <p>
          직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요
        </p>
        <p>
          가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요
        </p>
        <div className="question-box">
          두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              color: 'black',
              marginTop: '10px',
            }}
          >
            <RadioInput
              values={[
                {
                  label: '능력발휘',
                  num: 1,
                },
                {
                  label: '자율성',
                  num: 2,
                },
              ]}
              onClick={handleChange}
              name="example"
            />
          </div>
        </div>
        <div className="navigation">
          <NextButton
            state={state}
            username="hi"
            presentURL="/example"
            nextURL="/progress"
            label="검사시작"
          />
        </div>
      </PageLayout>
    </>
  );
}

export default React.memo(TestExample);
