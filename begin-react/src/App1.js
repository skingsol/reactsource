import "./App1.css";

// 컴포넌트 생성 : 함수
export default function App1() {
  return (
    //빈테그는 div로 인식 ,  구문이 2줄이상이라 return 으로 묶었음
    <>
      <h1>Start React</h1>
      <p>html 사용하기</p>
    </>
  );
}

// 컴포넌트 외부에서 사용할 수 있게 해야 함
// export default App1;
