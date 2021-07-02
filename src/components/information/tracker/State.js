import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function State() {
    const [stateData, setstateData] = useState([])

    useEffect(()=>{

       axios.get('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
       .then(res =>{
            // console.log(res.data.data)
            setstateData(res.data.data.statewise)
        })
       .catch(err => console.log(err))

    }, [])  
    return (
        <>
            <div className="state-data">
                <h1 className="v-header">State Wise Data</h1><br/>
                <div className="table-responsive state-table ">
                    <table className="table">
                        <colgroup>
                            <col className="bg-light"></col>
                            <col className="bg-info"></col>
                            <col className="bg-success"></col>
                            <col className="bg-danger"></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                stateData.map((d, i)=>{
                                    return (
                                        <tr key={i}>
                                            <td>{d.state}</td>
                                            <td>{d.confirmed}</td>
                                            <td>{d.recovered}</td>
                                            <td>{d.deaths}</td>
                                            <td>{d.active}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
