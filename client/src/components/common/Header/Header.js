import React, { Fragment } from 'react'
import './Header.scss'
import { Container, Tooltip, IconButton, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import {
	FavoriteBorder,
	ShoppingCartOutlined,
	PersonOutlineOutlined,
} from '@mui/icons-material'
import HeaderSearch from '../HeaderSearch/HeaderSearch'
import { toast } from 'react-toastify'

const Header = () => {
	const notify = () => toast('The function has not been developed.')

	return (
		<Fragment>
			<header className='header'>
				<Container
					maxWidth='xl'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '50px',
					}}
				>
					<h3 className='headerLogo'>
						<Link to='/'>
							<span>DStore</span>
						</Link>
					</h3>

					<HeaderSearch />

					<div className='headerAction'>
						<Tooltip title='Wishlist'>
							<IconButton onClick={notify}>
								<Badge badgeContent={1} color='primary'>
									<FavoriteBorder />
								</Badge>
							</IconButton>
						</Tooltip>
						<Tooltip title='Cart'>
							<IconButton onClick={notify}>
								<Badge badgeContent={1} color='primary'>
									<ShoppingCartOutlined />
								</Badge>
							</IconButton>
						</Tooltip>
						<Tooltip title='Login'>
							<IconButton onClick={notify}>
								<PersonOutlineOutlined />
							</IconButton>
						</Tooltip>
					</div>
				</Container>
			</header>
		</Fragment>
	)
}

export default Header
