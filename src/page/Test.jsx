import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function Test() {
  return (
    <PageLayout title="Test Progress">
      이것은 진행 페이지입니다.
      <div>
        <Link to="/example">이전</Link>
        <Link to="/fin">다음</Link>
      </div>
    </PageLayout>
  );
}
