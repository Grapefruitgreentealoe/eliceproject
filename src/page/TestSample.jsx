import React from "react";
import {Link} from "react-router-dom";
import PageLayout from "../components/PageLayout";


export default function TestExample(){
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


