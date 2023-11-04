import React from 'react'
import styles from "./Alert.module.css"

const Alert = () => {
    return (
        // ${styles.showAlert}
        <div className={`alert fade alert-danger alert-fixed ${styles.alert} `} id="alert-danger" role="alert" data-mdb-color="danger" data-mdb-position="top-right" data-mdb-stacking="true" data-mdb-width="535px" data-mdb-append-to-body="true" data-mdb-hidden="true" data-mdb-autohide="true" data-mdb-delay="2000">
            <i className="fas fa-times-circle me-3"></i>
            A simple danger alert with
            
        </div>
    )
}

export default Alert
