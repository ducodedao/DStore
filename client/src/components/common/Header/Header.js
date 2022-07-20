import React, { Fragment } from 'react'
import TopBar from './TopBar'
import NavBar from './NavBar'
import Search from './Search'

const Header = () => {
    return (
        <Fragment>
            <TopBar />
            <NavBar />
            <Search />
        </Fragment>
    )
}

export default Header
