import React, { Fragment } from 'react'
import './TopBar.scss'
import Container from '@mui/material/Container'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <Fragment>
            <div className='topbar'>
                <Container maxWidth='xl'>
                    <div className='topbarWrap'>
                        <div className='topbarLeft'>
                            <div className='phone'>
                                <PhoneIcon />
                                <span>84866866866</span>
                            </div>
                            <div className='email'>
                                <EmailIcon />
                                <span>dstore@gmail.com</span>
                            </div>
                        </div>
                        <div className='topbarRight'>
                            <Link to='/faq'>FAQ's</Link>
                            <Link to='/help'>Need Help?</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}

export default TopBar
