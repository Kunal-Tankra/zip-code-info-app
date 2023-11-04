import React from 'react'
import { useSelector } from 'react-redux'

const Info = () => {
    // use selector to get redux store states
    const infoData  = useSelector(state => state.infoData)
    const countryData = infoData.data
    return (
        <>

            <section className="container pb-4 pt-3">
                <h6>Country:- <strong>{countryData.country}</strong> |
                    Country Abbreviation:- <strong>{countryData.abbreviation ? countryData.country_abbreviation  : "_ _"}</strong>
                </h6>
                <div className="bg-white border rounded-5">
                    <section className="w-100 p-4">
                        <div id="datatable-basic-data-mdb-structure" className="datatable">
                            <div className="datatable-inner table-responsive ps" style={{ overflow: "auto", position: "relative" }}>
                                <table className="table datatable-table">
                                    <thead className="datatable-header">
                                        <tr>

                                            <th scope="col">Place Name</th>
                                            <th scope="col">Longitude</th>
                                            <th scope="col">State</th>
                                            <th scope="col">State Abbreviation</th>
                                            <th scope="col">Latitude</th>
                                        </tr>

                                    </thead>
                                    <tbody className="datatable-body">
                                       {countryData.places.map((data, idx)=>(
                                        <tr key={idx}>
                                            <td>{data.place_name? data.place_name : "- -"}</td>
                                            <td>{data.longitude? data.longitude : "- -"}</td>
                                            <td>{data.state? data.state : "- -"}</td>
                                            <td>{data.state_abbreviation? data.state_abbreviation : "- -"}</td>
                                            <td>{data.latitude? data.latitude : "- -"}</td>
                                        </tr>
                                       ))}
                                    </tbody>
                                </table>

                            </div>




                        </div>
                    </section>






                </div>
            </section>
        </>
    )
}

export default Info
