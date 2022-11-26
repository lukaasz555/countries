import React from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Filter from './components/Filter/Filter';
import CountryCard from './components/CountryCard/CountryCard';

function App() {
	return (
		<div className='App bg-lightBG min-h-screen w-1/1 flex flex-col items-start'>
			<Header />
			<div className='flex flex-col justify-between md:flex-row w-full min-w-mobile max-w-desktop my-2 mx-auto py-2 px-5 2xl:px-0'>
				<Input />
				<Filter />
			</div>
			<main className='flex flex-wrap justify-center md:justify-start w-full min-w-mobile max-w-desktop my-2 mx-auto'>
				<CountryCard />
			</main>
		</div>
	);
}

export default App;
