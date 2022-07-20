import React, { Fragment } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
    const footerAboutLinks = [
        {
            display: 'Giới thiệu',
            path: '/about',
        },
        {
            display: 'Liên hệ',
            path: '/about',
        },
        {
            display: 'Tuyển dụng',
            path: '/about',
        },
        {
            display: 'Tin tức',
            path: '/about',
        },
        {
            display: 'Hệ thống cửa hàng',
            path: '/about',
        },
    ]

    const footerCustomerLinks = [
        {
            display: 'Chính sách đổi trả',
            path: '/about',
        },
        {
            display: 'Chính sách bảo hành',
            path: '/about',
        },
        {
            display: 'Chính sách hoàn tiền',
            path: '/about',
        },
    ]

    return (
        <Fragment>
            <footer className='footer'>
                <div className='footerMain'>
                    <Container maxWidth='xl'>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
                        >
                            <Grid item xs={2} sm={4} md={4} lg={4}>
                                <h4>Về DStore</h4>
                                {footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))}
                            </Grid>

                            <Grid item xs={2} sm={4} md={4} lg={4}>
                                <h4>Tổng đài hỗ trợ</h4>
                                <p>
                                    Liên hệ đặt hàng{' '}
                                    <strong>84866866866</strong>
                                </p>
                                <p>
                                    Thắc mắc đơn hàng{' '}
                                    <strong>84866866866</strong>
                                </p>
                                <p>
                                    Góp ý, khiếu nại{' '}
                                    <strong>84866866866</strong>
                                </p>
                            </Grid>

                            <Grid item xs={2} sm={4} md={4} lg={4}>
                                <h4>Chăm sóc khách hàng</h4>
                                {footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))}
                            </Grid>

                            <Grid item xs={2} sm={4} md={4} lg={4}>
                                <h4>Theo dõi chúng tôi</h4>
                                <div className='footerSocial'>
                                    <p>
                                        <Link to='https://www.facebook.com/ToNgoDu.Official/'>
                                            <FacebookIcon />
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='https://www.instagram.com/tongodu/'>
                                            <InstagramIcon />
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='https://www.youtube.com/channel/UCv_o_IdRvMNYgJdUPSdwK6Q'>
                                            <YouTubeIcon />
                                        </Link>
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className='copyright'>Copyright 2022 by ducodedao.</div>
            </footer>
        </Fragment>
    )
}

export default Footer
