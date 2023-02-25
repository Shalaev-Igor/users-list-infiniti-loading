import React from 'react';
import cls from './select.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <div>
    <select 
      className={cls.MySelect} 
      value={value}
      onChange={event=>onChange(event.target.value)}
    >
      <option disabled value=''>{defaultValue}</option>
      {options.map(option=>(
        <option key={option.value} value={option.value}>{option.name}</option>
      )) }
    </select>
  </div>
  )
}

export default MySelect