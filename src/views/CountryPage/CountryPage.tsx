import React, { FC, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsTemplate from '../../components/Details/DetailsTemplate';
import DetailsContent from '../../components/Details/DetailsContent';
import { CountriesCtx } from '../../context/CountriesContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CountryProps } from '../../components/CountryCard/CountryCard';

const CountryPage: FC = () => {
	const [country, setCountry] = useState<any>();
	const location = useLocation();
	const { allCountries, setFiltered } = useContext(CountriesCtx);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name${location.pathname}`)
			.then((res) => {
				setCountry(Array.from(res.data));
				setFiltered(allCountries);
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

	const checkCountries = (data: string) => {
		const filtered = allCountries.filter(
			(c) => c.cca3.toUpperCase() === data.toUpperCase()
		);
		return filtered;
	};

	const getBorderCountries = () => {
		if (typeof country[0].borders !== 'undefined') {
			const borderCountries = country[0].borders.map((item: string) =>
				checkCountries(item)
			);
			return borderCountries.flat().map((item: CountryProps) => (
				<Link
					to={`/${item.name.common}`}
					className='px-3 py-1.5 shadow-rounded mr-3 mb-2 text-s md:text-m hover:scale-110 ease-linear duration-75'>
					{item.name.common}
				</Link>
			));
		}
	};

	return (
		<div>
			{typeof country == 'undefined' ? (
				'Loading'
			) : (
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
								<DetailsContent
									body={country[0].population.toLocaleString('en')}
								/>
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

						<div className='flex flex-col mb-25'>
							<h3 className='font-semibold text-m md:text-l mb-3'>
								Border Countries:
							</h3>
							<div className='flex flex-wrap'>{getBorderCountries()}</div>
						</div>
					</div>
				</main>
			)}
		</div>
	);
};

export default CountryPage;
