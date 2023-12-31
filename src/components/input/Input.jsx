import React, { useState } from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux';
import { loadingBarAction } from '../../redux/actionCreators/loadingBarAction';
import { alertAction } from '../../redux/actionCreators/alertAction';
import axios from 'axios';
import { infoDataAction } from '../../redux/actionCreators/infoDataAction';

const Input = () => {
    // states
    const [showClearBtn, setShowClearBtn] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    // dispatch method to dispatch any action
    const dispatch = useDispatch()

    // handle submit btn
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitDisabled(true)

        dispatch(loadingBarAction(10, true))

        // calling the api
        axios(`${process.env.REACT_APP_API_KEY}/${zipCode}`)
            .then(data => {
                
                // dispatch action for show data
                dispatch(infoDataAction(true, data.data))

                // show the clear button
                setShowClearBtn(true)



            })
            .catch(err => {
                // dispatch alert action
                dispatch(alertAction(true, "Data Not Found."))

                // close error
                setTimeout(() => {
                    
                    dispatch(alertAction(false, "Data Not Found."))
                }, 5000);
            })
            .finally(()=>{
                // loading progress
                dispatch(loadingBarAction(100, true))
                setTimeout(() => {
                    dispatch(loadingBarAction(100, false))
                    
                }, 700);

                setIsSubmitDisabled(false)
                
            })
    }

    // handle clear btn
    const handleClearBtn = (e)=>{
        e.preventDefault()
        dispatch(infoDataAction(false, {}))
        setZipCode("")
        setShowClearBtn(false)
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='col-xl-4 col-md-6 container mb-5 border rounded p-3 shadow-4' >

                <div>
                    <input type="number" id="form121" className="form-control" placeholder='Enter the Zip Code...' onChange={(e) => setZipCode(e.target.value)}  value={zipCode}required />
                    <label className="form-label" htmlFor="form121">Zip Code</label>
                </div>
                <button type='submit' className='btn btn-primary  mt-2' disabled={isSubmitDisabled} >Submit</button>

                {/* show clear button with state */}
                {showClearBtn &&

                    <button className='btn btn-secondary  mt-2 ms-2' onClick={handleClearBtn} >Clear</button>
                }
            </form>

        </>
    )
}

export default Input
