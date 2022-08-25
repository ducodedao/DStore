import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import NotFound from './components/common/NotFound/NotFound'

const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<MainLayout />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Fragment>
	)
}

export default App
