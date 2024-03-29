import React, { Fragment } from 'react'
import './Header.scss'
import { Container, Tooltip, IconButton, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material'
import HeaderSearch from '../HeaderSearch/HeaderSearch'
import { toast } from 'react-toastify'
import LoginRegister from '../../User/LoginRegister/LoginRegister'
import { useSelector } from 'react-redux'
import UserOption from '../../User/UserOption'

const Header = () => {
	const { isAuthenticated, user } = useSelector((state) => state.user)

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

						{isAuthenticated ? (
							<UserOption user={user} />
						) : (
							<LoginRegister />
						)}
					</div>
				</Container>
			</header>
		</Fragment>
	)
}

export default Header
