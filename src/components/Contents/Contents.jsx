import { useState } from "react";
import style from "./Contents.module.css";

function Contents() {
  const [value, setValue] = useState(false);
  return (
    <div className={style.listAll}>
      <input
        type="checkbox"
        className={style.checkBtn}
        value={value}
        onChange={() => {
          setValue((prev) => !prev);
        }}
      />
      <div className={style.listBack}>
        <div className={value ? style.trueLine : style.listMemo}></div>
      </div>
      <div className={style.ContentBtnAll}>
        <input type="submit" value={"complete"} className={style.completeBtn} />
        <input type="submit" value={"delete"} className={style.delBtn} />
      </div>
    </div>
  );
}

export default Contents;
