import React from "react";


export function RadioInput({ label, name, values }) {
  return (
    <div>
      <p>{label}</p>
      {values.map((value) => (
          <div key={value.id}>
        <p>
          {value.label}
          <input name={name} id={value.id} type="radio" />
        </p>
        </div>
      ))}
    </div>
  );
}
