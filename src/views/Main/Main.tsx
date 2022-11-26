import React, { FC, useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import Input from '../../components/Input/Input';
import CountryCard from '../../components/CountryCard/CountryCard';
import axios from 'axios';
import { CountryProps } from '../../components/CountryCard/CountryCard';

interface MainProps {
	countries: CountryProps[] | [];
}

const Main: FC<MainProps> = ({ countries }) => {
	const [filtered, setFiltered] = useState<CountryProps[] | []>([]);

	useEffect(() => {
		setFiltered(countries);
	}, [countries]);

	return (
		<div className='App bg-lightBG min-h-screen w-full flex flex-col items-start'>
			<div className='flex flex-col justify-between md:flex-row w-full min-w-mobile max-w-desktop my-2 mx-auto py-2 px-5 2xl:px-0'>
				<Input
					allCountries={countries}
					filtered={filtered}
					setFiltered={setFiltered}
				/>
				<Filter />
			</div>
			<main className='flex flex-wrap justify-center md:justify-start w-full min-w-mobile max-w-desktop my-2 mx-auto'>
				{filtered.length > 0
					? filtered.map((c: CountryProps) => (
							<CountryCard
								name={c.name}
								population={c.population}
								region={c.region}
								flags={c.flags}
								capital={c.capital}
							/>
					  ))
					: 'Loading ...'}
			</main>
		</div>
	);
};
export default Main;
