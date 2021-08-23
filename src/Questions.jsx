import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { QRadioInput } from './components/RadioInput';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const chkarr = [0, 0, 0, 0, 0];

function Questions() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const [chkstate, setChkstate] = useState(chkarr);

  const handleChange = (e, user) => {
    chkarr[user.qitemNo - 1] = e.target.value;
    setChkstate(chkarr);
    console.log(chkstate);
  };

  //event와 컴포넌트의 props를 같이 넘겨줄 수 있나요?

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      //요청이 시작 될 때는 error users 초기화 하기
      const response = await axios.get(
        'https://inspct.career.go.kr/openapi/test/questions?apikey=4848423aeee0be0d33a5f674f4383583&q=6',
      );
      dispatch({ type: 'SUCCESS', data: response.data.RESULT });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중..</div>; //로딩
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return users.map((user, index) => (
    <ul>
      {index >= 0 && index <= 4 ? (
        <li key={user.qitemNo}>
          {user.question}
          <p>
            <>
              <QRadioInput
                name="question"
                values={[user.answer01, user.answer02]}
                onClick={(e) => (user, e) => handleChange(e, user)}
                chked={chkarr[index]}
              />
            </>
          </p>
        </li>
      ) : null}
    </ul>
  ));
}

export default Questions;
