import React, { Fragment, useEffect, useRef } from 'react'
import './Search.scss'
import Container from '@mui/material/Container'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
    const searchRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 40 ||
                document.documentElement.scrollTop > 40
            ) {
                searchRef.current.classList.add('shrink')
            } else {
                searchRef.current.classList.remove('shrink')
            }
        })
    }, [])

    return (
        <Fragment>
            <div className='search' ref={searchRef}>
                <Container maxWidth='xl'>
                    <div className='searchWrap'>
                        <div className='logo'>
                            <span>DStore</span>
                        </div>
                        <div className='searchBox'>
                            <SearchIcon />
                            <input type='text' placeholder='Searching for...' />
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}

export default Search
