import React from 'react'

const Info = () => {
    return (
        <>
            
            <section className="container pb-4 pt-3">
                <h6>Country:- <strong>India</strong> |
                    Country Abbreviation:- <strong>MM</strong>
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
                                        <tr>
                                            <td>d</td>
                                            <td>ddfgsdgffs</td>
                                            <td>d</td>
                                            <td>dfgsfg</td>
                                            <td>d</td>
                                        </tr>
                                        <tr>
                                            <td>d</td>
                                            <td>d</td>
                                            <td>d</td>
                                            <td>d</td>
                                            <td>d</td>
                                        </tr>
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
