import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function TestFin() {
  return (
    <PageLayout title="Test Finish">
      테스트가 끝났습니다.
      <div>
        <Link to="/progress">이전</Link>
        <Link to="/result">다음</Link>
      </div>
    </PageLayout>
  );
}
