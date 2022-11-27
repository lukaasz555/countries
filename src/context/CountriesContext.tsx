import React, { createContext, useState, ReactNode } from 'react';
import { CountryProps } from '../components/CountryCard/CountryCard';

interface ICountriesCtxProvider {
	children: ReactNode;
}

interface ICountriesCtx {
	allCountries: CountryProps[] | [];
	setAllCountries: React.Dispatch<React.SetStateAction<CountryProps[]>>;
}

export const TestCtx = createContext<ICountriesCtx>({
	allCountries: [],
	setAllCountries: () => {},
});

export const CountriesContextProvider = ({
	children,
}: ICountriesCtxProvider) => {
	const [allCountries, setAllCountries] = useState<[] | CountryProps[]>([]);
	return (
		<TestCtx.Provider value={{ allCountries, setAllCountries }}>
			{children}
		</TestCtx.Provider>
	);
};
