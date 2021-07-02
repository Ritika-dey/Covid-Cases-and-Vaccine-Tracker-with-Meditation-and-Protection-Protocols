import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                 <div className="navbar-header">
                     <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar">
                         <span className="icon-bar bg-dark"></span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                     </button>
                     <NavLink className="navbar-brand" to="/">Home</NavLink>
                 </div>

                 <div className="collapse navbar-collapse navbar-right" id="navbar">
                    <ul className="nav navbar-nav"> 
                        <li className="dropdown">
                          <NavLink className="dropdown-toggle" data-toggle="dropdown" to="#">Information <span className="caret"></span></NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/tracker">Covid Tracker</NavLink></li>
                                <li className="divider"></li>
                                <li><NavLink to="/vaccine">Vaccine Availibility</NavLink></li> 
                            </ul>
                        </li>  

                        <li><NavLink to="/protocols">Protection</NavLink></li> 
                        <li><NavLink to="/meditation">Meditation</NavLink></li>
                    </ul>
                 </div>
              </div>
            </nav>
        </>
    )
}
