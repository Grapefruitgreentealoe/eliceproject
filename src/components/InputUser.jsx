import React, { useEffect, useState } from 'react';

import './page-layout.css';
import { RadioInput } from './RadioInput';
import { NextButton } from './Buttons';

function InputUser() {
  const [username, setName] = useState('');
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log('rendering...');
  });

  return (
    <div className="container">
      <label>이름</label>
      <input
        name="name"
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={username}
      />
      <br />
      <label>성별</label>
      <RadioInput
        values={[
          { label: '남자', num: '1' },
          { label: '여자', num: '2' },
        ]}
        name="questionNumber1"
        onClick={handleChange}
      />
      <div className="navigation">
        <NextButton
          state={state}
          username={username}
          presentURL="/"
          nextURL="/example"
          label="검사시작"
        />
      </div>
    </div>
  );
}

export default InputUser;
