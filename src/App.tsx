import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import CountryPage from './views/CountryPage/CountryPage';
import axios from 'axios';
import { CountryProps } from './components/CountryCard/CountryCard';

function App() {
	const [allCountries, setAllCountries] = useState<CountryProps[] | []>([]);
	const [filtered, setFiltered] = useState<CountryProps[] | []>([]);

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then((res) => {
				setAllCountries(res.data);
				setFiltered(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<Router>
			<div className='App bg-lightBG min-h-screen w-1/1 flex flex-col items-start'>
				<Header />
				<Routes>
					<Route path='/' element={<Main countries={allCountries} />} />
					{/* <Route path='/:name' element={<CountryPage />} /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
