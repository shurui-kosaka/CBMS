import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'

function CBMSHub() {
    return (
        <div>
            <Helmet>
                <title>CBMS Enumerator Hub</title>
            </Helmet>
            <Navbar />
        </div>
    )
}

export default CBMSHub
