import { useState } from "react";

const Item = (props) => {
  const [isopen, setIsopen] = useState(false);

  const clickHandler = () => {
    setIsopen((isopen) => !isopen);
  };

  const style = isopen ? `item open` : `item`;
  return (
    <>
      <div className={style} onClick={clickHandler}>
        <span className="number">{props.number}</span>
        <span className="title">{props.item.title}</span>
      </div>
      {isopen ? (
        <div className="content-box">
          <ul>{props.item.text}</ul>
        </div>
      ) : null}
    </>
  );
};

export default Item;
