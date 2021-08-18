import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PageLayout from "../components/PageLayout";

function nameSelector(state){
    return state.name;
}
export default function TestExample(){
    const name = useSelector(nameSelector);
    return(
        <PageLayout title="검사예시">
            <div className="question-box">
            </div>
            <div>
                <Link to="/progress"><button>검사시작</button></Link>
            </div>
        </PageLayout>
    )
}


