import React from 'react'
import cls from './input.module.css'

const MyInput = (props) => {
  return (
    <input {...props} className={cls.myInput} />
  )
}

export default MyInput