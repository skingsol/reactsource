import { useState } from "react";

function Animal() {
  // 상태변화 관리 변수 == useState()
  // btn : true, false
  // src : "./img/Ryan.png", "./img/Apichi.png"
  // button 이 클릭되면 button: false, src: "./img/Apichi.png"
  // button 이 클릭되면 button: false, src: "./img/Ryan.png"

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("../img/Apichi.png");

  const onToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("../img/Apichi.png");
    } else {
      setBtn(true);
      setSrc("../img/Ryan.png");
    }
  };
  return (
    <>
      <img src={src} alt="" />
      <div>
        <button onClick={onToggle}>사진변경</button>
      </div>
    </>
  );
}
export default Animal;
