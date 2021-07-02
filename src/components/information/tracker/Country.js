import React, { useEffect, useState } from 'react'
import {Chart} from 'react-google-charts'
import axios from 'axios'

export default function Country(props) {
    const [data, setdata] = useState({})

    useEffect(() =>{
       axios.get('https://covidapi.info/api/v1/country/IND/latest')
       .then(res => setdata(res.data.result[props.latestDate]))
       .catch(err => console.log(err))
    }, [])

    const active = data.confirmed - (data.deaths + data.recovered);
 
    return (
        <> 
               <h1 className="v-header">India COVID-19 Data</h1>
                <div className="chart">
                    <Chart  
                        width={'100%'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Type', 'number'], 
                            ['Active', active],
                            ['Deaths', data.deaths],
                            ['Recovered', data.recovered]
                        ]}
                        options={{  
                            pieHole: 0.4
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />  
                </div> 
        </>
    )
}
