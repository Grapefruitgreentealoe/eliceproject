import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QRadioInput } from './components/RadioInput';
import { useAsync } from 'react-async';
import { NextButton, PreviousButton } from './components/Buttons';
import './components/page-layout.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useAnswerDispatch } from './answerContext';
import { useHistory } from "react-router-dom"

async function getQuestion() {
  const response = await axios.get(
    'https://inspct.career.go.kr/openapi/test/questions?apikey=4848423aeee0be0d33a5f674f4383583&q=6',
  );

  return response.data.RESULT;
}

function Questions() {

  const history=useHistory();
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
  const dispatch = useAnswerDispatch();

  // eslint-disable-next-line
  const [page, setPage] = useState(0);
  const [percentnum, setPercentNum] = useState(0);
  // eslint-disable-next-line

  const handleChange = (e, question) => {
    setChkstate((state) => {
      const newArr = [...state];
      newArr[question.qitemNo - 1] = Number(e.target.value);
      const result = newArr.length == page * 5 + 5 || newArr.length == len;
      setAllChked(result);
      return newArr;
    });
    setPercentNum(100 / questions.length + percentnum);
  };

  const handleNextButton = (e) => {
    if (allchked) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    reload();

    const currentCheckStateLength = chkstate
      .slice(page * 5, (page + 1) * 5)
      .filter((el) => !!el).length;
    if (len && chkstate.length == len) {
      dispatch({ type: 'TESTDATA_SEND', payload: chkstate });
    }

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
      {`${Math.ceil(percentnum)}%`}

      <div className="progressBar">
        <div className="pgrb">
          <ProgressBar now={percentnum} />
        </div>
      </div>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {questions.map((question, index) =>
          index >= page * 5 && index <= page * 5 + 4 ? (
            <li key={question.qitemNo} className="question-box">
              {`Q${question.qitemNo}.`}
              {question.question}
              <p style={{ textAlign: 'center' }}>
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
      <nav className="navigation">
        {page != questions.length / 4 - 2 ? (
          <Button
            variant={allchked ? 'outline-primary' : 'secondary'}
            onClick={handleNextButton}
            disabled={allchked ? false : true}
          >
            다음
          </Button>
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
          <Button variant="outline-primary" onClick={() => setPage(page - 1)}>
            이전
          </Button>
        ) : null}
        {page == 0 ? (
          <Button variant="outline-primary" onClick={() => history.push('/example')}>
          이전
        </Button>
        ) : null}
      </nav>
    </>
  );
}

export default Questions;
