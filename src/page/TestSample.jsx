import React, { useState } from 'react';

import PageLayout from '../components/PageLayout';
import { QRadioInput } from '../components/RadioInput';
import { useHistory } from 'react-router';
import '../components/page-layout.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function TestExample() {

  const [state, setState] = useState('');
  const history = useHistory();
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
          <div>
            <QRadioInput
              values={[
                {
                  label: '능력발휘',
                  value: "1",
                  name:"example"
                },
                {
                  label: '자율성',
                  value: "2",
                  name:"example"
                },
              ]}
              onClick={handleChange}
              chked={state}
            />
          </div>
        </div>
        <div className="navigation">
        <Button
            variant={state ? 'outline-primary' : 'secondary'}
            onClick={()=>{if(state){history.push('/progress')}}}
            state={state}
            disabled={state ? false : true}
          >
           검사시작
          </Button>
        </div>
      </PageLayout>
    </>
  );
}

export default React.memo(TestExample);
