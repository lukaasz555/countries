import React, { FC, useEffect, useState, useContext } from 'react';
import Filter from '../../components/Filter/Filter';
import Input from '../../components/Input/Input';
import CountryCard from '../../components/CountryCard/CountryCard';
import { CountryProps } from '../../components/CountryCard/CountryCard';
import axios from 'axios';
import { TestCtx } from '../../context/CountriesContext';

const Main: FC = () => {
	/* 	const [allCountries, setAllCountries] = useState<CountryProps[] | []>([]); */
	const [filtered, setFiltered] = useState<CountryProps[] | []>([]);
	const { allCountries, setAllCountries } = useContext(TestCtx);

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
		<div className='bg-lightBG min-h-screen w-full flex flex-col items-start'>
			<div className='flex flex-col justify-between md:flex-row w-full min-w-mobile max-w-desktop my-2 mx-auto py-2 px-5 2xl:px-0'>
				<Input
					allCountries={allCountries}
					filtered={filtered}
					setFiltered={setFiltered}
				/>
				<Filter allCountries={allCountries} setFiltered={setFiltered} />
			</div>
			<main className='flex flex-wrap justify-center md:justify-start w-full min-w-mobile max-w-desktop my-2 mx-auto'>
				{filtered.length > 0
					? filtered.map((c: CountryProps) => (
							<CountryCard
								key={c.name.common}
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
