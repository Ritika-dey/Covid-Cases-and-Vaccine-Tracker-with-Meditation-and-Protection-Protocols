import React, { useState } from 'react'

export default function Advices({ques, answer, image}) {
    const [Show, setShow] = useState(false)
    return (
        <>
            <div className="adv adv-one">
                <h2 className="adv-ques"> 
                {
                    Show ? 
                    <span 
                       className="glyphicon glyphicon-minus" 
                       style={{cursor:"pointer"}} 
                       onClick= {() => setShow(!Show)}>&nbsp;</span>
                    :<span 
                       className="glyphicon glyphicon-plus"
                       style={{cursor:"pointer"}} 
                       onClick= {() => setShow(!Show)}>&nbsp;</span>
                }
                   {ques}
                </h2>
                {
                    Show && 
                    <div className="adv-ans">
                        <p className="adv-para"> {answer} </p>
                        <img src={image} alt="Advice one for covid"/>
                    </div> 
                } 
                
            </div>
        </>
    )
}
