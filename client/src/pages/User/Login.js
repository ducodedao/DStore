import React, { Fragment, useEffect, useState } from 'react'
import './Login.scss'
import { Grid, Paper, Button, Typography, Link, Container } from '@mui/material'
import Loader from '../../components/common/Loader/Loader'
import Title from '../../components/common/Title/Title'
import { Formik, Form } from 'formik'
import Textfield from '../../components/common/FormUI/Textfield'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user,
    )

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginSubmit = (e) => {
        e.preventDefault()
        dispatch(login(loginEmail, loginPassword))
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }

        if (isAuthenticated) {
            navigate('/account')
        }
    }, [dispatch, error, isAuthenticated, navigate])

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Title title='Đăng nhập -- DStore' />

                    <div className='login'>
                        <Grid>
                            <Container maxWidth='xl'>
                                <Paper
                                    elevation={10}
                                    style={{
                                        padding: 20,
                                        height: '70vh',
                                        width: '32vmax',
                                        margin: '2rem auto',
                                    }}
                                >
                                    <Grid align='center'>
                                        <h2>Đăng nhập</h2>
                                    </Grid>

                                    <Formik>
                                        {(formik) => (
                                            <Form onSubmit={loginSubmit}>
                                                <div className='loginEmail'>
                                                    <Textfield
                                                        type='email'
                                                        name='email'
                                                        label='Email'
                                                        placeholder='Email'
                                                        value={loginEmail}
                                                        onChange={(e) =>
                                                            setLoginEmail(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className='loginPassword'>
                                                    <Textfield
                                                        type='password'
                                                        name='password'
                                                        label='Password'
                                                        placeholder='Password'
                                                        value={loginPassword}
                                                        onChange={(e) =>
                                                            setLoginPassword(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <Button
                                                    type='submit'
                                                    color='primary'
                                                    variant='contained'
                                                    sx={{ margin: '1rem 0' }}
                                                    fullWidth
                                                >
                                                    Đăng nhập
                                                </Button>

                                                <Typography
                                                    sx={{
                                                        fontSize: '0.8rem',
                                                    }}
                                                >
                                                    <Link href='/password/forgot'>
                                                        Quên mật khẩu?
                                                    </Link>
                                                </Typography>

                                                <Typography
                                                    sx={{ marginTop: '6rem' }}
                                                >
                                                    Bạn chưa có tài khoản?{' '}
                                                    <Link href='/register'>
                                                        Đăng ký
                                                    </Link>
                                                </Typography>
                                            </Form>
                                        )}
                                    </Formik>
                                </Paper>
                            </Container>
                        </Grid>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Login
