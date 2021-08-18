import React,{useState , useEffect} from "react";
import {Link} from 'react-router-dom'

// import {useSelector , useDispatch} from "react-redux";
import PageLayout from "../components/PageLayout";

function nameSelector(state){
    return state.name;
}

export default function UserInfo() {
    // const dispatch = useDispatch();
    // const name = useSelector(nameSelector);
    const [userName , setUserName]= useState("");
    const [userGender , setUserGender]= useState("");

    // const handleClick = () => {
    //     dispatch({type : "TEST_ACTION"});
    //     }

    
    return (
        <PageLayout title="User Setting">
            <div className="form-container">
            <h1>직업가치관검사</h1>
            <p>이름</p>
            <input type="text" name="name" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <input type="radio" name="gender" value="male" onClick={(e) => setUserGender(e.target.value)}></input>남성
            <input type="radio" name="gender" value="female" onClick={(e) => setUserGender(e.target.value)}></input>여성
            <nav className="navigation">
        <Link to="/example" style={{ color: "white" }}>
            <button>검사시작</button>
        </Link>
      </nav>
            </div>
        </PageLayout>

    );
}

