import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useAnswerState } from '../answerContext';
import { useResultDispatch} from '../ResultContext'


export default function WonScore() {
  const t_data = useAnswerState();
  const dispatch = useResultDispatch();
  const getWonScore = async() =>{
    const result = await axios
      .post('https://www.career.go.kr/inspct/openapi/test/report'
      
      , 
      JSON.stringify(
        {
        apikey: 'ca115d14dfa918dd56d9172eb0aac33c',
        qestrnSeq: '6',
        trgetSe: '100209',
        name: t_data.name,
        gender: t_data.gender,
        grade: '',
        startDtm: Date.now(),
        answers: t_data.answers,
      }
      ),
      {

        headers: { "Content-Type": `application/json` }
    }
    )
    .then(
      async res => 
      {
      const seq = res.data.RESULT.url.split("seq=")[1];
      return await axios
          .get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`)
          .then(res => res.data.result.wonScore.split(" "))
          

  }
  )

      
  const wonScore_arr = result.map((score)=>score.split("="));
  dispatch({type:'SCORE',payload:wonScore_arr});

    wonScore_arr.sort(function(a,b){return b[1] - a[1];});
    const res1 = wonScore_arr[0][0];
    const res2 = wonScore_arr[1][0];

    dispatch({type:'RES',payload:[res1,res2]});

    return wonScore_arr;
}

  const {
    loading,
    data: wonScore,
    error,
    reload,
  } = useAsync({
    promiseFn: getWonScore,
  });

  useEffect(() => {
    reload();
    console.log(wonScore)
  },[wonScore])

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!wonScore) return null;


  return (
    <div>
      {wonScore}
      </div>
  );
}
