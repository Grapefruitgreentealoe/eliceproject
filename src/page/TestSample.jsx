import React from "react";
import {Link} from "react-router-dom";
import PageLayout from "../components/PageLayout";


export default function TestExample(){
 
       return (
    <PageLayout title="검사예시">
      <div className="question-box">
        두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.
      </div>

      <div>
        <Link to="/progress">검사시작</Link>
      </div>
    </PageLayout>
  );
}



