import React, { useEffect, useState } from 'react';

import './page-layout.css';
import { QRadioInput } from './RadioInput';
import { NextButton } from './Buttons';
import { useAnswerDispatch } from '../answerContext';

function InputUser() {
  const dispatch = useAnswerDispatch();
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
    if (username && state) {
      dispatch({ type: 'USERINFO', payload: [username, state] });
      console.log(state, username);
    }
  }, [username, state]);

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
      <QRadioInput
        values={[
          { label: '남자', value: '1' ,name:"questionNumber1"},
          { label: '여자', value: '2' ,name:"questionNumber1"},
        ]}
        onClick={handleChange}
        chked={state}
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
