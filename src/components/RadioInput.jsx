import React from 'react';

export function RadioInput({ onClick, name, values, state }) {
  return (
    <div>
      {values.map((value) => (
        <div key={value.num}>
          {value.label}
          <input
            name={name}
            defaultChecked={value.num === state}
            onClick={onClick}
            type="radio"
            value={value.num}
          />
        </div>
      ))}
    </div>
  );
}

export function QRadioInput({ onClick, values, chked }) {
  return (
    <div>
      {React.Children.toArray(
        values.map((value) => (
          <div>
            <label>{value.label}</label>
            <input
              name={value.name}
              onChange={onClick}
              type="radio"
              value={value.value}
              checked={value.value === chked}
            />
          </div>
        )),
      )}
    </div>
  );
}
//라디오 버튼 한개밖에 선택이 되지 않습니다.
