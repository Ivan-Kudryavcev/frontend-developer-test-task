import React from 'react';
import './selectStyle.css'

function Select(props) {
  return (
    <div>
      <select>
        <option>По умолчанию</option>
        <option>Дешевле</option>
        <option>Дороже</option>
      </select>
    </div>
  );
}

export default Select;
