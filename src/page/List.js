import React from 'react';
import './List.css'

export default function List1(props) {
  const { mess } = props;

  return (
    <div>
      <div className="titleBox">
        <h3>{mess[0].type}</h3>
      </div>
      <div className='listBox'>
        <ul className="ulLeft">
          {mess.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <ul className="ulRight">
          {mess.map((item, index) => (
            <li key={index}>{item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}