import React, { useEffect } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useResultState } from '../ResultContext';
import { useResultDispatch} from '../ResultContext'


export default function Major() {
    const dispatch = useResultDispatch();

    const result = useResultState();
    const res = result.res;
    const res1 = res[0];
    const res2 = res[1];

    const getMajor = async() =>{
    const result = await axios
    .get(
        `https://www.career.go.kr/inspct/api/psycho/value/majors?no1=${res1}&no2=${res2}`,
    ).catch(e=>console.log(e));

    const majors_arr = result.data.map((job)=>job[1]);

  dispatch({type:'MAJORS',payload:majors_arr});
    return majors_arr;
}

  const {
    loading,
    data: majors,
    error,
    reload,
  } = useAsync({
    promiseFn: getMajor,
  });

  useEffect(() => {
    reload();

  },[majors])

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!majors) return null;


  return (
    <div>
      {majors}
      </div>
  );
}
