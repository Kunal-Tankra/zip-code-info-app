import React from 'react'
import styles from "./Alert.module.css"
import { useSelector } from 'react-redux'

const Alert = () => {
    const alertStatus = useSelector(state=>state.alertStatus)

    return (
        
        <div className={`alert fade alert-danger alert-fixed ${styles.alert}`} id="alert-danger" role="alert" data-mdb-color="danger" data-mdb-position="top-right" data-mdb-stacking="true" data-mdb-width="535px" data-mdb-append-to-body="true" data-mdb-hidden="true" data-mdb-autohide="true" data-mdb-delay="2000">
            <i className="fas fa-times-circle me-3"></i>
           {alertStatus.msg}
            
        </div>
    )
}

export default Alert
