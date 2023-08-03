import { useState } from "react";

function Animal() {
  //상태변화 관리 변수 ==> useState()
  // btn : true, false
  // src : "./img/cat1.jpg", "./img/cat4.jpg"
  // button 이 클릭되면 button : false, src : "./img/cat4.jpg"
  // button 이 클릭되면 button : true, src : "./img/cat1.jpg"

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("../img/cat1.jpg");

  const onToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("../img/cat4.jpg");
    } else {
      setBtn(true);
      setSrc("../img/cat1.jpg");
    }
  };

  return (
    <>
      <img src={src} alt="" />
      <div>
        <button onClick={onToggle}>사진 변경</button>
      </div>
    </>
  );
}

export default Animal;
