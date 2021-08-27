import React, { useEffect } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useResultState } from '../ResultContext';
import { useResultDispatch} from '../ResultContext'


export default function Job() {
    const dispatch = useResultDispatch();
    const result = useResultState();
    const jobResItems = {
        1: '능력발휘',
        2: '자율성',
        3: '보수',
        4: '안정성',
        5: '사회적 인정',
        6: '사회봉사',
        7: '자기계발',
        8: '창의성',
    };

    const res1 = result.res[0];
    const res2 = result.res[1];
    
  const getJob = async() =>{
    const result = await axios
    .get(
        `https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=${res1}&no2=${res2}`
    )
    const jobs_arr = result.data.map((job)=>job[1]);

    dispatch({type:'JOBS',payload:jobs_arr});
      return jobs_arr;
  
}
  const {
    loading,
    data: jobs,
    error,
    reload,
  } = useAsync({
    promiseFn: getJob,
  });

  useEffect(() => {
    reload();

  },[jobs,reload])

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!jobs) return null;


  return (
    <div>
      {jobs}
      </div>
  );
}
