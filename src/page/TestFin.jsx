import React from "react";

import PageLayout from "../components/PageLayout";
import { PreviousButton, NextButton } from "../components/Buttons";
import "../components/page-layout.css"

export default function TestFin() {
  return (
    <PageLayout title="Test Finish">
      검사가 완료되었습니다.
      <div className="navigation">
          <NextButton state="1" username="hi" presentURL="/fin" nextURL="/result" label="결과보기" />
          </div>
    </PageLayout>
  );
}
