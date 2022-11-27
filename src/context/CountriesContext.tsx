import React, { createContext, useState, ReactNode } from 'react';
import { CountryProps } from '../components/CountryCard/CountryCard';

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

	return (
		<CountriesCtx.Provider
			value={{ allCountries, setAllCountries, filtered, setFiltered }}>
			{children}
		</CountriesCtx.Provider>
	);
};
