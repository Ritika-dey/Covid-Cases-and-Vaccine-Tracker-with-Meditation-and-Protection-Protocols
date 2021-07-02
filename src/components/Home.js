import React from 'react' 
import home_bg from '../image/home_bg.png'

export default function Home() {
    return (
        <>
        <div className="home">
          <img src={home_bg} className="img-home" alt="covid home page"/>
        </div>
        </>
    )
}
