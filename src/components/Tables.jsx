import { useResultState } from '../ResultContext';
import { Table } from 'react-bootstrap';

export function ProfileTables({ columns, values }) {
  return (
    <Table>
      <thead>
        <tr align="center" bgcolor="white">
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr align="center" bgcolor="white">
          {values.map((value) => (
            <td>{value}</td>
          ))}{' '}
        </tr>
      </tbody>
    </Table>
  );
}

export function JobTables() {
  const result = useResultState();
  const columns = ['분야', '직업'];
  const job_rows = ['고졸', '대졸', '대학원졸'];
  return (
    <Table>
      <thead>
        <tr align="center" bgcolor="white">
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {job_rows.map((row, index) => {
          if (index == 0)
            return (
              <tr align="center" bgcolor="white">
                <td>{row}</td>
                <td>
                  {result.jobs.map((job) => {
                    return job[1] == 2 ? job[0] : null;
                  })}
                </td>
              </tr>
            );
          if (index == 1)
            return (
              <tr align="center" bgcolor="white">
                <td>{row}</td>
                <td>
                  {result.jobs.map((job) => {
                    return job[1] == 4 ? job[0] : null;
                  })}
                </td>
              </tr>
            );
          if (index == 2)
            return (
              <tr align="center" bgcolor="white">
                <td>{row}</td>
                <td>
                  {result.jobs.map((job) => {
                    return job[1] == 5 ? job[0] : null;
                  })}
                </td>
              </tr>
            );
        })}
      </tbody>
    </Table>
  );
}

export function MajorTables() {
  const result = useResultState();
  const major_rows = [
    '계열무관',
    '인문',
    '사회',
    '교육',
    '공학',
    '자연',
    '의학',
    '예체능',
  ];
  const columns = ['분야', '직업'];
  return (
    <Table>
      <thead>
        <tr align="center" bgcolor="white">
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {major_rows.map((row, index) => {
          return(
          <tr align="center" bgcolor="white">
            <td>{row}</td>
            <td>
              {result.jobs.map((job) => {
                  console.log(index,job[1],job[0]);
                if (job[1] == index) return job[0];
              })}
            </td>
          </tr>);
        })}
      </tbody>
    </Table>
  );
}
