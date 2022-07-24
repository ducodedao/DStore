import React, { Fragment } from 'react'
import DotLoader from 'react-spinners/DotLoader'

const Loader = () => {
    return (
        <Fragment>
            <DotLoader
                color='#00ffe8'
                cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                }}
                loading
                size={50}
                speedMultiplier={5}
            />
        </Fragment>
    )
}

export default Loader
