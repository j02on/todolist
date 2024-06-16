import style from "./Main.module.css";

function Main() {
  return (
    <div className={style.mainAll}>
      <input
        type="text"
        className={style.todoContents}
        placeholder="할 일을 입력하세요"
      ></input>
      <input type="submit" value={"add"} className={style.addBtn}></input>
      <div className={style.contentList}></div>
    </div>
  );
}

export default Main;
