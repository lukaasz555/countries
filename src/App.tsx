import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import CountryPage from './views/CountryPage/CountryPage';
import { CountriesContextProvider } from './context/CountriesContext';

function App() {
	return (
		<Router>
			<CountriesContextProvider>
				<div className='bg-lightBG min-h-screen w-1/1 flex flex-col items-center'>
					<Header />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/:name' element={<CountryPage />} />
					</Routes>
				</div>
			</CountriesContextProvider>
		</Router>
	);
}

export default App;
