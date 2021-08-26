import React from 'react';

export function RadioInput({ onClick, name, values, state }) {
  return (
    <div>
      {values.map((value) => (
        <div key={value.num} style={{ marginTop: '10px' }}>
          <input
            name={name}
            defaultChecked={value.num === state}
            onClick={onClick}
            type="radio"
            value={value.num}
          />
          {value.label}
        </div>
      ))}
    </div>
  );
}

export function QRadioInput({ onClick, values, chked }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        color: 'black',
      }}
    >
      {React.Children.toArray(
        values.map((value) => (
          <div style={{ marginTop: '10px' }}>
            <input
              name={value.name}
              onChange={onClick}
              type="radio"
              value={value.value}
              checked={value.value === chked}
            />
            <label>{value.label}</label>
          </div>
        )),
      )}
    </div>
  );
}
