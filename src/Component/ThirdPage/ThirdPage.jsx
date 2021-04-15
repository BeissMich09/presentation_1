import React from "react";
import style from "./ThirdPage.module.css";
import ThirdPage1998 from "./ThirdPage1998/ThirdPage1998";
import ThirdPage2009 from "./ThirdPage2009/ThirdPage2009";
import ThirdPage2016 from "./ThirdPage2016/ThirdPage2016";

const ThirdPage = (props) => {
  return (
    <div className={style.thirdPage}>
      <div className={style.thirdPage_pages}>
        {+props.inputValue < 33 ? (
          <ThirdPage1998 />
        ) : +props.inputValue < 66 ? (
          <ThirdPage2009 />
        ) : (
          <ThirdPage2016 />
        )}
      </div>
      <div className={style.range_container}>
        <input
          onChange={(e) => {
            props.getInputValue(e.target.value);
          }}
          className={style.range}
          value={props.inputValue}
          type="range"
          max="100"
          min="0"
          style={{
            background: `gradient(  #d1eaff ${props.inputValue}%, #d1eaff ${props.inputValue}%, rgba(209, 234, 255, 0.5) ${props.inputValue}%, rgba(209, 234, 255, 0.5) ${props.inputValue}%);`,
          }}
        />
      </div>
      <div className={style.years}>
        <p>1998</p>
        <p>2006</p>
        <p>2016</p>
      </div>
    </div>
  );
};

export default ThirdPage;