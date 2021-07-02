import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export default function Vavail() {
    const [Pin, setPin] = useState('')
    const date = new Date();
    const month = date.getMonth() + 1;
    const today = date.getDate() + '-' + (month < 10 ? '0'+ month : month)+ '-' + date.getFullYear(); //get error in date, getting one month late date
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(today)
        axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+ Pin +'&date='+ today) 
        .then(res => {
            history.push({
                pathname :'/vaccine_data',
                state : {data : res.data}
            })
        })
        .catch(err => console.log(err))
    }
    return (
        <>
          <div className="container vaccine-avail">
              <h1 className="v-header">Check Availability of Vaccine</h1>
              <div className="vaccine-form">
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="pin">PINCODE: &nbsp;</label>
                      <input 
                        type="text"
                        id="pin"
                        value={Pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter PinCode" />
                        <br/><br/>

                       <input className="btn btn-primary" type="submit" value="Check" />
                  </form> 
              </div>
          </div>
        </>
    )
}
