import React from 'react'
import { useSelector } from 'react-redux'

const ProgressBar = () => {
 // use selector to get redux store states
 const loadingBarProgress = useSelector(state=>state.loadingBarProgress)

  return (
    <>
       <div className="progress fixed-top">
        <div className="progress-bar" role="progressbar" style={{ width: `${loadingBarProgress.amount}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </>
  )
}

export default ProgressBar
