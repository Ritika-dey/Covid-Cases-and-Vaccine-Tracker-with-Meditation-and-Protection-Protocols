import React, { useEffect, useState } from 'react' 
import Advices from './Advices'
import data from './advices.json'
import Slider from './Slider'

export default function Protocols() {
    const [Adata, setAdata] = useState([])
    
    useEffect(() =>{
        setAdata(data)
     },[])

    return (
        <>
            <div className="container protocols-div">
                <h1 className="v-header">COVID Protocols</h1>

                <div className="slider-div">
                    <Slider />
                </div>

                <div className="motivation">
                    <p className="motivation-para">
                    If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work.<br/>
                    <span>Together we will overcome this situation. Stay Home!! Stay Safe!!</span>
                    </p>
                </div>


                <div className="advice-div">
                    <h2 className="adv-header">FAQs: </h2>
                    {
                        Adata.map(item =>{
                            return (
                                <Advices 
                                   key={item.id} 
                                   ques={item.ques}
                                   answer={item.ans}
                                   image={item.image}/>
                            )
                        })
                    }
                </div>
                
                <p>*All informations are from <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public?gclid=CjwKCAjwn6GGBhADEiwAruUcKl53fnKJAGWKEB-rUsuoyoqnW2UY19S_x2S5jhrAqpxKig5yshq_TxoC9fEQAvD_BwE" target="_blank" rel="noreferrer"><i>COVID-19 advice for the public</i></a> by WHO</p>
            </div>
        </>
    )
}
