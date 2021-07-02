import React from 'react' 
import {useHistory} from 'react-router-dom'

export default function VaccineData() {  
    const history = useHistory();
    const data = history.location.state.data; //data from vavail component using history

    // console.log(data)
    return (
        <>
            <div className="container vaccine-data">
                <h1 className="v-header">Vaccine Availablility Data</h1>

                <div className="region-detail">
                    <span>District: {data.centers[0].district_name} &nbsp; &nbsp; &nbsp;</span>
                    <span>State: {data.centers[0].state_name}</span>
                </div> <br/>

                <div className="table-responsive table-bordered">
                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th>Center ID</th>
                                <th>Address</th>
                                <th>Block</th>
                                <th>Dose1 Quantity Available</th>
                                <th>Dose2 Quantity Available</th>
                                <th>Vaccine Name</th>
                                <th>Min Age Limit</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.centers.map(center => {
                                    return (
                                        <tr key={center.center_id}>
                                            <td>{center.center_id}</td>
                                            <td>{center.address}</td>
                                            <td>{center.block_name}</td>
                                            <td>{center.sessions[0].available_capacity_dose1}</td>
                                            <td>{center.sessions[0].available_capacity_dose2}</td>
                                            <td>{center.sessions[0].vaccine}</td>
                                            <td>{center.sessions[0].min_age_limit}</td>
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
