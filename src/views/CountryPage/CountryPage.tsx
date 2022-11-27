import React, { FC, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsTemplate from '../../components/Details/DetailsTemplate';
import DetailsContent from '../../components/Details/DetailsContent';
import { CountriesCtx } from '../../context/CountriesContext';
import axios from 'axios';

const CountryPage: FC = () => {
	const [country, setCountry] = useState<any>();
	const location = useLocation();
	const { allCountries, setAllCountries, setFiltered } =
		useContext(CountriesCtx);
	console.log('CPAGE: ', allCountries);

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then((res) => {
				setAllCountries(res.data);
				setFiltered(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name${location.pathname}`)
			.then((res) => {
				setCountry(Array.from(res.data));
			})
			.catch((err) => console.log(err));
	}, [location]);

	const getNativeName = () => {
		if (typeof country !== 'undefined') {
			const keys = Object.keys(country[0].name.nativeName);
			const lastKey = keys[keys.length - 1];
			const nativeName = country[0].name.nativeName[lastKey].common;
			return nativeName;
		}
	};

	const getCurrencies = (): string[] => {
		if (typeof country !== 'undefined') {
			const values = Object.values(country[0].currencies);
			const currenciesNames = values.map((item: any) => item.name);
			return currenciesNames;
		} else {
			return [];
		}
	};

	const getLanguages = (): string[] => {
		if (typeof country !== 'undefined') {
			const langs: string[] = Object.values(country[0].languages);
			return langs;
		} else {
			return [];
		}
	};

	const getData = () => {
		if (typeof country !== 'undefined') {
			const borders = country[0].borders;
			console.log(borders);
		}
	};

	getData();

	return (
		<div>
			{typeof country == 'undefined' ? null : (
				<main className='flex flex-col mt-5 items-start min-w-card px-8'>
					<div className='my-5 w-full flex justify-center'>
						<img
							src={country[0].flags.png}
							alt={`Flag of ${country[0].name.common}`}
						/>
					</div>
					<div className='flex flex-col'>
						<div className='mb-5'>
							<h2 className='font-semibold mb-2 text-xl md:text-2xl'>
								{country[0].name.common}
							</h2>
							<div className='flex'>
								<DetailsTemplate body='Native Name' />
								<DetailsContent body={getNativeName()} />
							</div>
							<div className='flex'>
								<DetailsTemplate body='Population' />
								<DetailsContent body={country[0].population} />
							</div>
							<div className='flex'>
								<DetailsTemplate body='Region' />
								<DetailsContent body={country[0].region} />
							</div>
							<div className='flex'>
								<DetailsTemplate body='Sub Region' />
								<DetailsContent body={country[0].subregion} />
							</div>
							<div className='flex'>
								<DetailsTemplate body='Capital' />
								<DetailsContent body={country[0].capital.join(', ')} />
							</div>
						</div>

						<div className='mb-5'>
							<div className='flex'>
								<DetailsTemplate body='Top Level Domain' />
								<DetailsContent body={country[0].tld} />
							</div>
							<div className='flex'>
								<DetailsTemplate body='Currencies' />
								<DetailsContent body={getCurrencies().join(', ')} />
							</div>
							<div className='flex'>
								<DetailsTemplate body='Languages' />
								<DetailsContent body={getLanguages().join(', ')} />
							</div>
						</div>

						<div className='flex mb-5'>
							<h3 className='font-semibold text-m md:text-l'>
								Border Countries:
							</h3>
						</div>
					</div>
				</main>
			)}
		</div>
	);
};

export default CountryPage;
