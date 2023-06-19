import React, { useState } from 'react'

const Accordion = ({data}) => {
    const [curOpen,setCurOpen] = useState(null)
  return (
    <div className='accordion'>{data.map((el,index)=>(<AccordionItem curOpen={curOpen} onOpen = {setCurOpen} title={el.title} num={index} key={el.title}>{el.text}</AccordionItem>))}
    </div>
  )
}

function AccordionItem({num,title,curOpen,onOpen,children}){
    const isOpen = num === curOpen
    function handleToggle (){
        onOpen(isOpen?null:num)
    }
    return(
        <div className={`item ${ isOpen ?"open":""}`} onClick={handleToggle}>
            <p className='number'>{num<9?`0${num+1}`: num+1}</p>
            <p className='text'>{title}</p>
            <p className='icon'>{isOpen ? "-":"+"}</p>
            {isOpen&&<div className='content-box'>{children}</div>}
        </div>
    )
}

export default Accordion