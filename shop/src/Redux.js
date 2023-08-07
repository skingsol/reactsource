import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import { changeName, changeAge } from "./store/userSlice";

export default function Redux() {
  //store.js 사용하기
  let user = useSelector((state) => {
    //state 에는 모든 reducer이 들어와 있음
    return state;
  });

  console.log(user);
  console.log(user.user);
  console.log(user.stock);

  let carts = user.carts;
  const dispath = useDispatch();

  return (
    <Container className="mt-5">
      <h3>
        {user.user.name} : {user.user.age}님의 장바구니 -{" "}
        <Button size="sm" onClick={() => dispath(changeName())}>
          이름변경
        </Button>
        <Button size="sm" onClick={() => dispath(changeAge(100))}>
          나이변경
        </Button>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>아이디</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {/* {carts.map((carts, idx) => (
              <tr key={idx}>
              <td>{carts.id}</td>
              <td>{carts.name}</td>
              <td>{carts.count}</td>
              <td>
                <Button size="sm">변경</Button>
              </td>
            </tr>
          ))} */}

          {/* {carts.map((carts, idx) => {}) 중괄호로 시작하면 리턴이 필요함*/}
          {carts.map((carts, idx) => {
            return (
              <tr key={idx}>
                <td>{carts.id}</td>
                <td>{carts.name}</td>
                <td>{carts.count}</td>
                <td>
                  <Button size="sm">변경</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
