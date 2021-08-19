import React from "react";

export function TextInput({ label, name }) {
  return (
    <div>
      <p>{label}</p>
      <input name={name} type="text" />
    </div>
  );
}
