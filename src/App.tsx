import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import CountryPage from './views/CountryPage/CountryPage';

function App() {
	return (
		<Router>
			<div className='App bg-lightBG min-h-screen w-1/1 flex flex-col items-start'>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/:name' element={<CountryPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
