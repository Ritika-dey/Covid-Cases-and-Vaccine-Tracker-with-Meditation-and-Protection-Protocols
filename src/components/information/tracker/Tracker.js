import React from 'react' 
import Country from './Country'
import State from './State'

export default function Tracker(props) {
    return (
        <div> 
            <h1 className="v-header">COVID-19 DashBoard ( Global )</h1><br/> 
            <div className="container latestdata">
                <div className="confirmed-cases">
                    <h2>Active Cases</h2>
                    <h4>{props.data.confirmed}</h4>
                </div>

                <div className="death-cases">
                    <h2>Total Deaths</h2>
                    <h4>{props.data.deaths}</h4>
                </div>

                <div className="recovered-cases">
                    <h2>Total Recovered</h2>
                    <h4>{props.data.recovered}</h4>
                </div>
            </div>

           <div className="container country-data">
             <Country latestDate = {props.latestDate}/>
           </div>

           <div className="container state-data">
               <State />
           </div>
           <p className="text-right">Last Date Updated : {props.latestDate}  &nbsp;</p>
        </div>
    )
}
