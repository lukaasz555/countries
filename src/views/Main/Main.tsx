import React, { FC, useContext, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import Input from '../../components/Input/Input';
import CountryCard from '../../components/CountryCard/CountryCard';
import { CountryProps } from '../../components/CountryCard/CountryCard';
import { CountriesCtx } from '../../context/CountriesContext';
import Loader from '../../components/Loader/Loader';

const Main: FC = () => {
	const { allCountries, filtered, setFiltered } = useContext(CountriesCtx);
	const [inputPhrase, setInputPhrase] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		setInputPhrase(value);
		const filteredItems = allCountries.filter((country) =>
			country.name.common.toLowerCase().includes(value)
		);
		if (value === '') {
			setFiltered(allCountries);
		} else if (filteredItems.length > 0) {
			setFiltered(filteredItems);
		} else {
			setFiltered([]);
			setErrorMessage(
				"Ooops, we haven't found a country with provided name :("
			);
		}
	};

	const filterByRegion = (e: any) => {
		if (typeof e === 'string') {
			const filteredByRegion = allCountries.filter(
				(country) => country.region.toLowerCase() === e.toLowerCase()
			);
			setFiltered(filteredByRegion);
		} else {
			const target = e.target as Element;
			const filteredByRegion = allCountries.filter(
				(country) =>
					country.region.toLowerCase() === target.innerHTML.toLowerCase()
			);
			setFiltered(filteredByRegion);
		}
		setOpen(!open);
		setInputPhrase('');
	};

	return (
		<div className='bg-lightBG min-h-screen w-full flex flex-col items-start lg:px-8'>
			<div className='flex flex-col justify-between md:flex-row w-full min-w-mobile max-w-desktop my-2 mx-auto py-2 px-5 lg:px-5'>
				<Input
					allCountries={allCountries}
					filtered={filtered}
					setFiltered={setFiltered}
					handleInput={handleInputChange}
					inputValue={inputPhrase}
				/>
				<Filter
					open={open}
					setOpen={setOpen}
					allCountries={allCountries}
					setFiltered={setFiltered}
					filterByRegion={filterByRegion}
				/>
			</div>
			<main className='flex flex-wrap justify-center lg:justify-between w-full min-w-mobile max-w-desktop my-2 mx-auto'>
				{filtered.length > 0 ? (
					filtered.map((c: CountryProps) => (
						<CountryCard
							key={c.name.common}
							name={c.name}
							population={c.population}
							region={c.region}
							flags={c.flags}
							capital={c.capital}
							cca3={c.cca3}
						/>
					))
				) : errorMessage !== '' ? (
					<div className='w-full flex justify-center mt-10'>
						<h2 className='text-l lg:text-2xl mt-5 px-2 mx-5'>
							{errorMessage}
						</h2>
					</div>
				) : (
					<Loader />
				)}
			</main>
		</div>
	);
};
export default Main;
