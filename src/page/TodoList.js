import React from 'react';
import List1 from './List'
import TodoList from './TodoList.css'

export default function List2(props) {
  // 接受app组件传递的数据
  const { message } = props;

  // 过滤分类赋值,符合type=Fruits的的数据返给fruitsData
  const fruitsData = message.filter(item => item.type === 'Fruits');
  // 过滤分类赋值,符合type=Vegetables的的数据返给vegetablesData
  const vegetablesData = message.filter(item => item.type === 'Vegetables');

  return (
    <div>
      <div className="titleBox">
        <div className="titleContainer">
          <h3>Name</h3>
          <h3>Price</h3>
        </div>
      </div>
      {/* 如果 fruitsData 数组的长度大于0（即存在水果数据），则渲染 <List1 mess={fruitsData} /> 组件；否则，不进行任何渲染。 */}
      {fruitsData.length > 0 && <List1 mess={fruitsData} />}
      {/* 如果 vegetablesData 数组的长度大于0（即存在水果数据），则渲染 <List1 mess={vegetablesData} /> 组件；否则，不进行任何渲染。 */}
      {vegetablesData.length > 0 && <List1 mess={vegetablesData} />}
    </div>
  );
}