import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./page-layout.css"
import RadioInput from "./RadioInput";
function InputUser() {
  const [username, setName] = useState("");
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value)
    console.log(e.target.value)
  };

  const onChange = (e) => {
    setName(e.target.value);
    
  };

  return (
    <div>
      <label>이름</label>
      <input
        name="name"
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={username}
      />
      
      <RadioInput values={
    [{label:"남자", num:"1"},{label:"여자",num:"2"}]} 
    name="questionNumber1" onClick={handleChange} 

/>
      <Link
        to={state && username ? "/example" : "/"}
        style={{ color: "white" }}
      >
        <nav className="navigation">
          <button>검사시작</button>
        </nav>
      </Link>
    </div>
  );
}

export default InputUser;
