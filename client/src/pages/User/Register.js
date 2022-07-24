import React, { Fragment, useEffect, useState } from 'react'
import './Register.scss'
import { Grid, Paper, Button, Typography, Link, Container } from '@mui/material'
import Loader from '../../components/common/Loader/Loader'
import Title from '../../components/common/Title/Title'
import { Formik, Form } from 'formik'
import Textfield from '../../components/common/FormUI/Textfield'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, register } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user,
    )

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = user

    const [avatar, setAvatar] = useState('/img/Profile.png')
    const [avatarPreview, setAvatarPreview] = useState('/img/Profile.png')

    const registerSubmit = (e) => {
        e.preventDefault()

        const myForm = new FormData()

        myForm.set('name', name)
        myForm.set('email', email)
        myForm.set('password', password)
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
    }, [dispatch, error, isAuthenticated, navigate])

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Title title='Đăng ký -- DStore' />

                    <div className='register'>
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
                                        <h2>Đăng ký</h2>
                                    </Grid>

                                    <Formik>
                                        {(formik) => (
                                            <Form
                                                encType='multipart/form-data'
                                                onSubmit={registerSubmit}
                                            >
                                                <div className='registerName'>
                                                    <Textfield
                                                        type='text'
                                                        name='name'
                                                        label='Name'
                                                        placeholder='Name'
                                                        value={name}
                                                        onChange={
                                                            registerDataChange
                                                        }
                                                    />
                                                </div>

                                                <div className='registerEmail'>
                                                    <Textfield
                                                        type='email'
                                                        name='email'
                                                        label='Email'
                                                        placeholder='Email'
                                                        value={email}
                                                        onChange={
                                                            registerDataChange
                                                        }
                                                    />
                                                </div>

                                                <div className='registerPassword'>
                                                    <Textfield
                                                        type='password'
                                                        name='password'
                                                        label='Password'
                                                        placeholder='Password'
                                                        value={password}
                                                        onChange={
                                                            registerDataChange
                                                        }
                                                    />
                                                </div>

                                                <div id='registerImage'>
                                                    <img
                                                        src={avatarPreview}
                                                        alt='Avt'
                                                    />
                                                    <input
                                                        type='file'
                                                        name='avatar'
                                                        accept='image/*'
                                                        onChange={
                                                            registerDataChange
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
                                                    Đăng ký
                                                </Button>

                                                <Typography
                                                    sx={{ marginTop: '6rem' }}
                                                >
                                                    Bạn đã có tài khoản?{' '}
                                                    <Link href='/login'>
                                                        Đăng nhập
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

export default Register
