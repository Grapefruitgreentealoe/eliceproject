import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QRadioInput } from './components/RadioInput';
import { useAsync } from 'react-async';

async function getQuestion() {
  const response = await axios.get(
    'https://inspct.career.go.kr/openapi/test/questions?apikey=4848423aeee0be0d33a5f674f4383583&q=6',
  );

  return response.data.RESULT;
}
function Questions() {
  const {
    loading,
    data: questions,
    error,
    reload,
  } = useAsync({
    promiseFn: getQuestion,
  });
  const len = questions ? questions.length : 0;
  const chkarr = new Array(len).fill(0);

  const [chkstate, setChkstate] = useState(chkarr);
  const [allchked, setAllChked] = useState(false);

  const handleChange = (e, question) => {
    setChkstate((state) => {
      const newArr = [...state];
      newArr[question.qitemNo - 1] = Number(e.target.value);

      if (chkstate.length == page * 5 + 4 || chkstate.length == len) {
        setAllChked(true);
      } else {
        setAllChked(false);
      }
      console.log(newArr, chkstate, allchked);
      return newArr;
    });
  };

  const handleNextButton = (e) => {
    console.log(allchked, page, e.target.state);
    if (allchked) {
      setPage(page + 1);
    }
  };

  // const handlePrevButton = (allchked) => {
  //   console.log(allchked, page);
  //   setPage(page - 1);
  // };

  // eslint-disable-next-line
  const [page, setPage] = useState(0);
  // eslint-disable-next-line

  useEffect(() => {
    reload();
  }, [page]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!questions) return null;

  return (
    <>
      {page}
      {questions.map((question, index) => (
        <ul>
          {index >= page * 5 && index <= page * 5 + 4 ? (
            <li key={question.qitemNo}>
              {question.question}
              <p>
                <QRadioInput
                  name="question"
                  values={[
                    {
                      label: question.answer01,
                      value: 1,
                    },
                    {
                      label: question.answer02,
                      value: 2,
                    },
                  ]}
                  onClick={(e) => handleChange(e, question)}
                  chked={chkstate[index]}
                />
              </p>
            </li>
          ) : null}
        </ul>
      ))}
      {page != questions.length / 4 - 2 ? (
        <button onClick={handleNextButton} state={allchked}>
          다음
        </button>
      ) : null}
      {page > 0 ? (
        <button onClick={() => setPage(page - 1)}>이전</button>
      ) : null}
    </>
  );
}

export default Questions;
