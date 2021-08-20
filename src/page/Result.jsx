import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
//post로 결과 가져오기
export default function Result() {
  return (
    <PageLayout title="Test Progress">
      결과 페이지입니다.
      <div>
        <Link to="/">처음으로</Link>
      </div>
    </PageLayout>
  );
}
