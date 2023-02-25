import React from "react";
import clasess from './button.module.css'

function MyButton({children, ...props}){
    return(
        <button {...props} className={clasess.MyBtn}>{children}</button>
    )
}
export default MyButton;