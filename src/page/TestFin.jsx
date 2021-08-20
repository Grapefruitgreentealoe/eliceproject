import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { PreviousButton, NextButton } from "../components/Buttons";
import "../components/page-layout.css"

export default function TestFin() {
  return (
    <PageLayout title="Test Finish">
      테스트가 끝났습니다.
      <div className="navigation">
        <PreviousButton state="1" username="hi" presentURL="/fin" previousURL="/progress" label="이전" />
          <NextButton state="1" username="hi" presentURL="/fin" nextURL="/fin" label="다음" />
          </div>
    </PageLayout>
  );
}
