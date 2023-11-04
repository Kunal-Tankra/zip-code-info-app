import React from 'react'

const ProgressBar = () => {
  return (
    <>
       <div className="progress fixed-top">
        <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </>
  )
}

export default ProgressBar
