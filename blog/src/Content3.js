import "./Content.css";
import { useState } from "react";

function Content3() {
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);

  // const likeUp1 = () => {
  //   setLike1((like) => like + 1);
  // };
  // const likeUp2 = () => {
  //   setLike2((like) => like + 1);
  // };

  const likeUp1 = () => {
    setLike1(like1 + 1);
  };
  const likeUp2 = () => {
    setLike2(like2 + 1);
  };

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3>
            React 개발환경 설정
            <span onClick={likeUp1}>👍</span> {like1}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>
            React 기본문법
            <span onClick={likeUp2}>👍</span> {like2}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}
export default Content3;
