import React, { Fragment, useEffect, useRef } from 'react'
import './NavBar.scss'
import { Link, useLocation } from 'react-router-dom'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'

const NavBar = () => {
    const mainNav = [
        {
            display: 'Trang chủ',
            path: '/',
        },
        {
            display: 'Sản phẩm',
            path: '/products',
        },
        {
            display: 'Dịch vụ',
            path: '/services',
        },
        {
            display: 'Liên hệ',
            path: '/contact',
        },
    ]

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex((e) => e.path === pathname)

    const navbarRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 40 ||
                document.documentElement.scrollTop > 40
            ) {
                navbarRef.current.classList.add('shrink')
            } else {
                navbarRef.current.classList.remove('shrink')
            }
        })
    }, [])

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <Fragment>
            <div className='navbar' ref={navbarRef}>
                <Container maxWidth='xl'>
                    <div className='navbarMenu'>
                        <div
                            className='navbarMenuMobileToggle'
                            onClick={menuToggle}
                        >
                            <MenuIcon />
                        </div>
                        <div className='logo'>
                            <Link to='/'>
                                <span>DStore</span>
                            </Link>
                        </div>
                        <div className='navbarMenuLeft' ref={menuLeft}>
                            <div
                                className='navbarMenuLeftClose'
                                onClick={menuToggle}
                            >
                                <CloseIcon />
                            </div>
                            {mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`navbarMenuItem navbarMenuLeftItem ${
                                        index === activeNav ? 'active' : ''
                                    }`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className='navbarMenuRight'>
                            <Stack direction='row' spacing={1}>
                                <IconButton aria-label='favorite'>
                                    <Badge badgeContent={1} color='secondary'>
                                        <FavoriteIcon color='primary' />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label='cart'>
                                    <Badge badgeContent={1} color='secondary'>
                                        <ShoppingCartIcon color='primary' />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label='person'>
                                    <PersonIcon color='primary' />
                                </IconButton>
                            </Stack>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}

export default NavBar
