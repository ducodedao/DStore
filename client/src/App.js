import React, { Fragment } from 'react'
import './App.scss'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/User/Login'
import Register from './pages/User/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <Fragment>
            <ToastContainer />
            <Header />

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </Fragment>
    )
}

export default App
