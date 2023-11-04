import React from 'react'
import "./Input.css"

const Input = () => {
    return (
        <>
            <form className='col-xl-4 col-md-6 container mb-5' >

                <div>
                    <input type="number" id="form121" className="form-control" placeholder='Enter the Zip Code...' />
                    <label className="form-label" htmlFor="form121">Zip Code</label>
                </div>
                <button type='submit' className='btn btn-primary  mt-2' >Submit</button>
                <button className='btn btn-secondary  mt-2 ms-2' >Clear</button>
            </form>

        </>
    )
}

export default Input
