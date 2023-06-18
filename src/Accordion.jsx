import React, { useState } from 'react'

const Accordion = ({data}) => {
  return (
    <div className='accordion'>{data.map((el,index)=><AccordionItem
        title={el.title} text={el.text} num={index} key={Date.now()}
    />)}</div>
  )
}

function AccordionItem({num,title,text}){
    const [isOpen,setIsOpen] = useState(false)
    function handleToggle (){
        setIsOpen(isOpen=>!isOpen)
    }
    return(
        <div className={`item ${ isOpen ?"open":""}`} onClick={handleToggle}>
            <p className='number'>{num<9?`0${num+1}`: num+1}</p>
            <p className='text'>{title}</p>
            <p className='icon'>{isOpen ? "-":"+"}</p>
            {isOpen&&<div className='content-box'>{text}</div>}
        </div>
    )
}

export default Accordion