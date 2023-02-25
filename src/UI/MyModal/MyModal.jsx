import React from 'react'
import cls from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootClass=[cls.MyModal]
    if(visible){
        rootClass.push(cls.active)
    }

    return (
    <div className={rootClass.join(' ')} onClick={()=>setVisible(false)}>
        <div className={cls.MyModalContent} onClick={e=>e.stopPropagation()}>
        <div className={cls.MyModalClose} onClick={()=>setVisible(false)}>+</div>
            {children}
        </div> 
    </div>
    )
}

export default MyModal