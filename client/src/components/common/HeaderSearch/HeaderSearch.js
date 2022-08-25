import React, { Fragment, useRef, useState } from 'react'
import './HeaderSearch.scss'
import { Tooltip, IconButton } from '@mui/material'
import { Search, Clear } from '@mui/icons-material'

const HeaderSearch = () => {
	const searchRef = useRef(null)
	const inputRef = useRef()

	const [searchValue, setSearchValue] = useState('')

	const searchToggle = () => {
		searchRef.current.classList.toggle('active')
		inputRef.current.focus()
	}

	const handleChange = (e) => {
		const searchValue = e.target.value

		if (!searchValue.startsWith(' ')) {
			setSearchValue(searchValue)
		}
	}

	const handleClear = () => {
		setSearchValue('')
		inputRef.current.focus()
	}

	return (
		<Fragment>
			<div className='headerSearch'>
				<div
					className={`headerSearchBox ? 'active' : ''`}
					ref={searchRef}
				>
					<input
						type='text'
						placeholder='Search'
						spellCheck={false}
						ref={inputRef}
						value={searchValue}
						onChange={handleChange}
					/>

					{!!searchValue && (
						<button
							className='headerSearchClear'
							onClick={handleClear}
						>
							<Clear />
						</button>
					)}

					<button
						className='headerSearchBtn'
						onMouseDown={(e) => e.preventDefault()}
					>
						<Search />
					</button>
				</div>

				<div className='headerSearchAction' onClick={searchToggle}>
					<Tooltip title='Search'>
						<IconButton>
							<Search />
						</IconButton>
					</Tooltip>
				</div>
			</div>
		</Fragment>
	)
}

export default HeaderSearch
