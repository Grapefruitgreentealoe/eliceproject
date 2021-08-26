import React from 'react';
import {Row} from 'react-bootstrap';
import "./page-layout.css";
export function QRadioInput({ onClick, values, chked }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:"row",
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
