import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QRadioInput } from './components/RadioInput';
import { useAsync } from 'react-async';
import { NextButton, PreviousButton } from './components/Buttons';
import './components/page-layout.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  // eslint-disable-next-line
  const [page, setPage] = useState(0);
  const [percentnum, setPercentNum] = useState(0);
  // eslint-disable-next-line

  const handleChange = (e, question) => {
    setChkstate((state) => {
      const newArr = [...state];
      newArr[question.qitemNo - 1] = Number(e.target.value);

      // 이시점
      // newArr - 5개 chkstate - 4개
      const result = newArr.length == page * 5 + 5 || newArr.length == len;
      console.log('[handleChange] result :', result);

      setAllChked(result);
      // console.log(newArr, chkstate, allchked);
      return newArr;
    });
    setPercentNum(100 / questions.length + percentnum);
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

  useEffect(() => {
    reload();

    const currentCheckStateLength = chkstate
      .slice(page * 5, (page + 1) * 5)
      .filter((el) => !!el).length;

    console.log(
      '[useEffect]currentCheckStateLength: ',
      currentCheckStateLength,
      chkstate,
      page,
    );

    setAllChked(
      currentCheckStateLength === 5 ||
        (undefined !== questions &&
          page == questions.length / 4 - 2 &&
          currentCheckStateLength == 3),
    );
  }, [page, reload, chkstate]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!questions) return null;

  return (
    <>
      {Math.ceil(percentnum)}
      <div className="progressBar">
        <ProgressBar now={percentnum} />
      </div>
      <ul>
        {questions.map((question, index) =>
          index >= page * 5 && index <= page * 5 + 4 ? (
            <li key={question.qitemNo} className="question-box">
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
          ) : null,
        )}
      </ul>

      {page != questions.length / 4 - 2 ? (
        <button onClick={handleNextButton} state={allchked}>
          다음
        </button>
      ) : null}
      {page == questions.length / 4 - 2 ? (
        <NextButton
          state={allchked}
          username="hi"
          presentURL="/progress"
          nextURL="/fin"
          label="결과보기"
        />
      ) : null}

      {page > 0 ? (
        <button onClick={() => setPage(page - 1)}>이전</button>
      ) : null}
      {page == 0 ? (
        <PreviousButton previousURL="/example" label="이전" />
      ) : null}
    </>
  );
}

export default Questions;
