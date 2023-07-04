import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import search from './search.css'

export default function SearchList(props) {
  // 接收修改app数据方法
  const { setSearchTerm } = props;
  //定义一个空字符串
  const [inputValue, setInputValue] = useState("");
  //定义一个false用于控制按钮选择
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  useEffect(() => {
    //使用lodash来做防抖
    const delayedSearch = debounce(() => {
      //300毫秒未输入就把数据传递给app组件
      setSearchTerm(inputValue);
    }, 300);

    delayedSearch();

    return () => {
      delayedSearch.cancel();
    };
  }, [inputValue, setSearchTerm]);

  //获取输入框内容
  const handleInputChange = (e) => {
    //修改空字符串内容为输入框内容
    setInputValue(e.target.value);
  };

  //点击取反
  const handleRadioChange = () => {
    // 把showOnlyInStock取反
    setShowOnlyInStock(!showOnlyInStock);
  };

  return (
    <div className="box">
      <input
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <label>
        <input
          type="checkbox"
          name="applicationSystem"
          checked={showOnlyInStock}
          onChange={handleRadioChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}
