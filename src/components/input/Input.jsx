import React, { useState } from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux';
import { loadingBarAction } from '../../redux/actionCreators/loadingBarAction';
import { alertAction } from '../../redux/actionCreators/alertAction';
import axios from 'axios';

const Input = () => {
    // states
    const [showClearBtn, setShowClearBtn] = useState(false);
    const [zipCode, setZipCode] = useState(null);

    // dispatch method to dispatch any action
    const dispatch = useDispatch()

    // handle submit btn
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(loadingBarAction(10, true))

        // calling the api
        axios(`${process.env.REACT_APP_API_KEY}/${zipCode}`)
            .then(data => {
                

                console.log(data, "data")



            })
            .catch(err => {
                console.log(err, "err")
                // dispatch alert action
                dispatch(alertAction(true, "Data Not Found."))
            })
            .finally(()=>{
                // loading progress
                dispatch(loadingBarAction(100, true))
                setTimeout(() => {
                    dispatch(loadingBarAction(100, false))
                    
                }, 700);
                
                // close error
                setTimeout(() => {
                    
                    dispatch(alertAction(false, "Data Not Found."))
                }, 5000);
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='col-xl-4 col-md-6 container mb-5' >

                <div>
                    <input type="number" id="form121" className="form-control" placeholder='Enter the Zip Code...' onChange={(e) => setZipCode(e.target.value)} required />
                    <label className="form-label" htmlFor="form121">Zip Code</label>
                </div>
                <button type='submit' className='btn btn-primary  mt-2' >Submit</button>

                {/* show clear button with state */}
                {showClearBtn &&

                    <button className='btn btn-secondary  mt-2 ms-2' >Clear</button>
                }
            </form>

        </>
    )
}

export default Input
