import React from 'react'

export default function Slider() {
    return (
        <>
             <div className="carousel slide" id="myCarousel" data-ride="carousel">
                    {/* dots */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                
                    <div className="carousel-inner">
                        <div className="item active">
                        <img className="slider-img" src="https://www.who.int/images/default-source/health-topics/coronavirus/tile_prepare_your_space_self_isolation_5_3.jpg?sfvrsn=2f582150_5" alt="1st item" style={{width:"100%" , height:"80vh"}} /> 
                        </div>

                        <div className="item">
                        <img className="slider-img" src="https://www.who.int/images/default-source/health-topics/coronavirus/spothlight-missinformation.tmb-1920v.png?sfvrsn=d8631afa_11" alt="2nd item" style={{width:"100%" , height:"80vh"}} />  
                        </div>

                        <div className="item">
                        <img className="slider-img" src="https://www.who.int/images/default-source/vaccines-explained/vaccines-antibody-illustration-02-29-oct.jpg?Status=Master&sfvrsn=a79ee886_36" alt="3rd item" style={{width:"100%" , height:"80vh"}} />  
                        </div>
                    </div>

                    {/* left and right buttons */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only"> Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only"> Next</span>
                    </a>
                </div>
        </>
    )
}
