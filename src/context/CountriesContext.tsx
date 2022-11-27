import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { CountryProps } from '../components/CountryCard/CountryCard';
import axios from 'axios';

interface ICountriesCtxProvider {
	children: ReactNode;
}

interface ICountriesCtx {
	allCountries: CountryProps[] | [];
	setAllCountries: React.Dispatch<React.SetStateAction<CountryProps[]>>;
	filtered: CountryProps[] | [];
	setFiltered: React.Dispatch<React.SetStateAction<CountryProps[]>>;
}

export const CountriesCtx = createContext<ICountriesCtx>({
	allCountries: [],
	setAllCountries: () => {},
	filtered: [],
	setFiltered: () => {},
});

export const CountriesContextProvider = ({
	children,
}: ICountriesCtxProvider) => {
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
		<CountriesCtx.Provider
			value={{ allCountries, setAllCountries, filtered, setFiltered }}>
			{children}
		</CountriesCtx.Provider>
	);
};
