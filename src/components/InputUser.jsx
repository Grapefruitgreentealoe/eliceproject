import React, { useEffect, useRef, useState } from 'react';

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

  const [checkedValue, setCheckedValue] = useState(false);

  const inputRadioRef1 = useRef();
  const inputRadioRef2 = useRef();

  const handleClick = () => {
    const checked1 = inputRadioRef1.current.checked;
    const checked2 = inputRadioRef2.current.checked;
    console.log(checked1, checked2);
  };

  useEffect(() => {
    console.log('rendering...');
  });

  return (
    <div>
      <label>이름</label>
      <input
        name="name"
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={username}
      />

      <div>
        <h2>radio input 시연</h2>

        <div>
          <label htmlFor="test-radio-1">Uncontrolled</label>

          <input
            ref={inputRadioRef1}
            id="test-radio-1"
            type="radio"
            name="test-radio-1"
            defaultChecked={false} // uncontrolled
          />

          <input
            ref={inputRadioRef2}
            id="test-radio-1"
            type="radio"
            name="test-radio-1"
            defaultChecked={false}
          />
          <button type="button" onClick={handleClick}>
            Submit
          </button>
        </div>

        <div>
          <label htmlFor="test-radio-1">Controlled</label>

          <input
            id="test-radio-2"
            type="radio"
            name="test-radio-2"
            value={1}
            checked={checkedValue == 1}
            onChange={(e) => setCheckedValue(e.target.value)}
          />

          <input
            id="test-radio-2"
            type="radio"
            name="test-radio-2"
            value={2}
            checked={checkedValue == 2}
            onChange={(e) => setCheckedValue(e.target.value)}
          />
        </div>
      </div>

      <RadioInput
        values={[
          { label: '남자', num: '1' },
          { label: '여자', num: '2' },
        ]}
        name="questionNumber1"
        onClick={handleChange}
      />
      <NextButton
        state={state}
        username={username}
        presentURL="/"
        nextURL="/example"
        label="검사시작"
      />
    </div>
  );
}

export default InputUser;
