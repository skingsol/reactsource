import { useEffect, useState } from "react";

// useEffect : 컴포넌트 라이프 사이클을 이용한 작업 필요시
// 라이프 사이클 : 1) 컴포넌트 마운트 : 컴포넌트가 처음 보여지는 시점
//                  2)       언마운트 : 컴포넌트가 제거되는 시점
//                  3)       업데이트 : useState()
function Life() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log("마운트 시");

    // 함수 등록 : 1초가 지나면 안녕 alert 창 띄우기
    const timeout = setTimeout(() => {
      alert("안녕");
    }, 1000);

    return () => {
      console.log("언마운트 시");
      //등록했던 함수 제거
      clearTimeout(timeout);
    };
  }, []); //[flag, count] : flag or count 변수 중에서

  return (
    <>
      <div>컴포넌트 라이프 사이클 : {count} </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼클릭
      </button>
    </>
  );
}

export default Life;
