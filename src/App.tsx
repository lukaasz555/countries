import React from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Filter from './components/Filter/Filter';

function App() {
	return (
		<div className='App bg-lightBG h-screen w-1/1 flex flex-col items-start'>
			<Header />
			<div className='flex flex-col justify-between md:flex-row w-full min-w-mobile max-w-desktop my-2 mx-auto py-2 px-5 2xl:px-0'>
				<Input />
				<Filter />
			</div>
		</div>
	);
}

export default App;
