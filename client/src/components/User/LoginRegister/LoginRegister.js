import React, { Fragment, useEffect, useState } from 'react'
import './LoginRegister.scss'
import {
	Dialog,
	DialogContent,
	IconButton,
	Tooltip,
	TextField,
	Avatar,
	InputAdornment,
	Box,
	Tab,
} from '@mui/material'
import {
	Lock,
	Mail,
	Person,
	PersonOutlineOutlined,
	Visibility,
	VisibilityOff,
} from '@mui/icons-material'
import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login, register } from '../../../redux/actions/userAction'
import { toast } from 'react-toastify'

const LoginRegister = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user,
	)

	const [openDialog, setOpenDialog] = useState(false)
	const [tab, setTab] = useState('Login')
	const [eye, setEye] = useState(false)

	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [loginConfirmPassword, setLoginConfirmPassword] = useState('')

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const { name, email, password, confirmPassword } = user

	const [avatar, setAvatar] = useState('/images/Profile.png')
	const [avatarPreview, setAvatarPreview] = useState('/images/Profile.png')

	const handleOpenDialog = () => {
		setOpenDialog(true)
	}

	const handleCloseDialog = () => {
		setOpenDialog(false)
	}

	const handleChangeTab = (event, newValue) => {
		setTab(newValue)
	}

	const handleClickShowPassword = () => {
		setEye(!eye)
	}

	const handleMouseDownPassword = (e) => {
		e.preventDefault()
	}

	const loginSubmit = (e) => {
		e.preventDefault()

		dispatch(login(loginEmail, loginPassword, loginConfirmPassword))
	}

	const registerSubmit = (e) => {
		e.preventDefault()

		const myForm = new FormData()

		myForm.set('name', name)
		myForm.set('email', email)
		myForm.set('password', password)
		myForm.set('confirmPassword', confirmPassword)
		myForm.set('avatar', avatar)

		dispatch(register(myForm))
	}

	const registerDataChange = (e) => {
		if (e.target.name === 'avatar') {
			const reader = new FileReader()

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result)
					setAvatar(reader.result)
				}
			}

			reader.readAsDataURL(e.target.files[0])
		} else {
			setUser({ ...user, [e.target.name]: e.target.value })
		}
	}

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (isAuthenticated) {
			navigate('/account')
		}
	}, [dispatch, error, navigate, isAuthenticated])

	return (
		<Fragment>
			<Tooltip title='Login'>
				<IconButton onClick={handleOpenDialog}>
					<PersonOutlineOutlined />
				</IconButton>
			</Tooltip>

			<Dialog open={openDialog} onClose={handleCloseDialog}>
				<DialogContent>
					<TabContext value={tab}>
						<Box
							sx={{
								paddingBottom: 2,
								borderBottom: 1,
								borderColor: 'divider',
							}}
						>
							<TabList onChange={handleChangeTab} centered>
								<Tab label='Login' value='Login' />
								<Tab label='Register' value='Register' />
							</TabList>
						</Box>
						<TabPanel value='Login'>
							<form className='authForm' onSubmit={loginSubmit}>
								<div className='authEmail'>
									<TextField
										required
										fullWidth
										type='email'
										label='Email'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Mail />
												</InputAdornment>
											),
										}}
										value={loginEmail}
										onChange={(e) =>
											setLoginEmail(e.target.value)
										}
									/>
								</div>

								<div className='authPassword'>
									<TextField
										required
										fullWidth
										type={eye ? 'text' : 'password'}
										label='Password'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Lock />
												</InputAdornment>
											),

											endAdornment: (
												<InputAdornment position='end'>
													<IconButton
														onClick={
															handleClickShowPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge='end'
													>
														{eye ? (
															<Visibility />
														) : (
															<VisibilityOff />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
										value={loginPassword}
										onChange={(e) =>
											setLoginPassword(e.target.value)
										}
									/>
								</div>

								<div className='authConfirmPassword'>
									<TextField
										required
										fullWidth
										type={eye ? 'text' : 'password'}
										label='Confirm Password'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Lock />
												</InputAdornment>
											),

											endAdornment: (
												<InputAdornment position='end'>
													<IconButton
														onClick={
															handleClickShowPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge='end'
													>
														{eye ? (
															<Visibility />
														) : (
															<VisibilityOff />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
										value={loginConfirmPassword}
										onChange={(e) =>
											setLoginConfirmPassword(
												e.target.value,
											)
										}
									/>
								</div>

								<div className='authForgot'>
									<Link to='/password/forgot'>
										Forgot password?
									</Link>
								</div>

								<LoadingButton
									type='submit'
									variant='outlined'
									loading={loading}
									fullWidth
									sx={{ marginTop: '1rem' }}
								>
									Login
								</LoadingButton>
							</form>
						</TabPanel>

						<TabPanel value='Register'>
							<form
								className='authForm'
								encType='multipart/form-data'
								onSubmit={registerSubmit}
							>
								<div className='authName'>
									<TextField
										required
										fullWidth
										type='text'
										id='name'
										name='name'
										label='Name'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Person />
												</InputAdornment>
											),
										}}
										value={name}
										onChange={registerDataChange}
									/>
								</div>

								<div className='authEmail'>
									<TextField
										required
										fullWidth
										type='email'
										id='email'
										name='email'
										label='Email'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Mail />
												</InputAdornment>
											),
										}}
										value={email}
										onChange={registerDataChange}
									/>
								</div>

								<div className='authPassword'>
									<TextField
										required
										fullWidth
										type={eye ? 'text' : 'password'}
										id='password'
										name='password'
										label='Password'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Lock />
												</InputAdornment>
											),

											endAdornment: (
												<InputAdornment position='end'>
													<IconButton
														onClick={
															handleClickShowPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge='end'
													>
														{eye ? (
															<Visibility />
														) : (
															<VisibilityOff />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
										value={password}
										onChange={registerDataChange}
									/>
								</div>

								<div className='authConfirmPassword'>
									<TextField
										required
										fullWidth
										type={eye ? 'text' : 'password'}
										id='confirmPassword'
										name='confirmPassword'
										label='Confirm Password'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Lock />
												</InputAdornment>
											),

											endAdornment: (
												<InputAdornment position='end'>
													<IconButton
														onClick={
															handleClickShowPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge='end'
													>
														{eye ? (
															<Visibility />
														) : (
															<VisibilityOff />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
										value={confirmPassword}
										onChange={registerDataChange}
									/>
								</div>

								<div className='authImage'>
									<Avatar src={avatarPreview} />
									<TextField
										fullWidth
										type='file'
										name='avatar'
										accept='image/*'
										onChange={registerDataChange}
									/>
								</div>

								<LoadingButton
									type='submit'
									variant='outlined'
									loading={loading}
									fullWidth
									sx={{ marginTop: '1rem' }}
								>
									Register
								</LoadingButton>
							</form>
						</TabPanel>
					</TabContext>
				</DialogContent>
			</Dialog>
		</Fragment>
	)
}

export default LoginRegister
