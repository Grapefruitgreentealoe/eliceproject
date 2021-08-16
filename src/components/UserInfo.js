import React,{useState} from "react";
import {Link} from 'react-router-dom'
function UserInfo() {
    const [userName, setUserName] = useState("");
    const [userGender, setUserGender] = useState("");


    return (
        <div>
            <h1>직업가치관검사</h1>
            <p>이름</p>
            <input type="text" name="name" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <input type="radio" name="gender" value="male" onClick={(e) => setUserGender(e.target.value)}></input>남성
            <input type="radio" name="gender" value="female" onClick={(e) => setUserGender(e.target.value)}></input>여성
            <Link to="/TEST"><button>검사시작</button></Link>
        </div>

    );
}

export default UserInfo;