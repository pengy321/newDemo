import React, { useState, useEffect } from 'react';
import SearchList from './page/search';
import List from './page/TodoList';
import Cs from './page/cs';
import ImageUploader from './page/ImageUploader';
import './App.css';

function App() {

  //定义数据
  const [message, setMessage] = useState([
    { name: 'Apple', price: '$1', type: 'Fruits' },
    { name: 'Dragonfruit', price: '$1', type: 'Fruits' },
    { name: 'Passionfruit', price: '$2', type: 'Fruits' },
    { name: 'Spinach', price: '$2', type: 'Vegetables' },
    { name: 'Pumpkin', price: '$4', type: 'Vegetables' },
    { name: 'Peas', price: '$1', type: 'Vegetables' }
  ]);

  //定义新的数据，并取值 message
  const [filteredMessage, setFilteredMessage] = useState(message);
  //定义一个空字符串
  const [searchTerm, setSearchTerm] = useState('');
  
  // 定义useEffect，依赖searchTerm数据的变化 并且定义事件300毫秒执行
  useEffect(() => {
    const delay = setTimeout(() => {
      filterData();
    }, 300);

    return () => clearTimeout(delay);
  }, [searchTerm]);


  //过滤数据，数据中name字符串如果包含search返回数据保存在 filteredData中
  const filterData = () => {
    const filteredData = message.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // 使用setFilteredMessage重新赋值给 filteredMessage
    setFilteredMessage(filteredData);
  };

  return (
    <div className="App">
      {/* 把空字符串修改方法传递给search组件 */}
      <SearchList setSearchTerm={setSearchTerm} />
      {/* 把过滤后的新数据返给list父组件 */}
      <List message={filteredMessage} />


<ImageUploader/>
      <Cs/>
      
    </div>
  );
}

export default App;