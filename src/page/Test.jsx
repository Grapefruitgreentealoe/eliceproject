import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { PreviousButton, NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import Questions from '../Questions';

//get으로 테스트 문항 가져오기
//상태관리 포스트로 보낼형식으로 할것
/* POST http:/www.career.go.kr/inspct/openapi/test/report
Content-Type: application/json

{
  "apikey": "",
  "qestrnSeq": "20",
  "trgetSe": "100206",
  "name": "홍길동",
  "gender": "100323",
  "school": "율도중학교",
  "grade": "2",
  "email": "",
  "startDtm": 1550466291034,
  "answers": "1=5 2=7 3=3 4=7 5=1 6=2 7=1 8=5 9=5 10=1 11=4 12=4 13=5 14=4 15=4 16=4 17=4 18=5 19=1 20=1 21=1 22=5 23=3 24=6 25=3 26=2 27=2 28=6 29=3 30=2 31=4 32=3 33=5 34=2 35=3 36=2 37=7 38=2 39=5 40=5 41=5 42=1 43=7 44=6 45=5 46=4 47=2 48=5 49=4 50=5 51=5 52=5 53=7 54=2 55=6 56=4 57=6 58=4 59=3 60=5 61=5 62=5 63=7 64=4 65=7 66=5"
}
*/
export default function Test() {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };
  return (
    <PageLayout title="Test Progress">
      이것은 진행 페이지입니다.
      <Questions />
    </PageLayout>
  );
}
