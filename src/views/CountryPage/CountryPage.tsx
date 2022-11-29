import React, { FC, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsTemplate from '../../components/Details/DetailsTemplate';
import DetailsContent from '../../components/Details/DetailsContent';
import { CountriesCtx } from '../../context/CountriesContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CountryProps } from '../../components/CountryCard/CountryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Loader from '../../components/Loader/Loader';

const CountryPage: FC = () => {
	const [country, setCountry] = useState<any>();
	const location = useLocation();
	const { allCountries, setFiltered } = useContext(CountriesCtx);

	useEffect(() => {
		axios
			.get(
				`https://restcountries.com/v3.1/name/${location.pathname.replace(
					'/countries/',
					''
				)}`
			)
			.then((res) => {
				const arr = Array.from(res.data);
				const currentCountry = arr[0];
				setCountry(currentCountry);
				setFiltered(allCountries);
			})
			.catch((err) => console.log(err));
	}, [location]);

	const getNativeName = (): string => {
		if (typeof country !== 'undefined') {
			const keys = Object.keys(country.name.nativeName);
			const lastKey = keys[keys.length - 1];
			const nativeName = country.name.nativeName[lastKey].common;
			return nativeName;
		}
		return '';
	};

	const getCurrencies = (): string[] => {
		if (typeof country !== 'undefined') {
			const values = Object.values(country.currencies);
			const currenciesNames = values.map((item: any) => item.name);
			return currenciesNames;
		} else {
			return [];
		}
	};

	const getLanguages = (): string[] => {
		if (typeof country !== 'undefined') {
			const langs: string[] = Object.values(country.languages);
			return langs;
		} else {
			return [];
		}
	};

	const checkCountries = (data: string): CountryProps[] => {
		const filtered = allCountries.filter(
			(c) => c.cca3.toUpperCase() === data.toUpperCase()
		);
		return filtered;
	};

	const getBorderCountries = (): JSX.Element | boolean => {
		if (typeof country.borders !== 'undefined') {
			const { borders } = country;
			const borderCountries = borders.map((item: string) =>
				checkCountries(item)
			);
			if (borderCountries.length > 0) {
				return (
					<>
						<h3 className='font-semibold text-m md:text-l mb-3'>
							Border Countries:
						</h3>
						<div className='flex flex-wrap'>
							{borderCountries.flat().map((item: CountryProps) => (
								<Link
									key={item.name.common}
									to={`/countries/${item.name.common.toLowerCase()}`}
									className='px-3 py-1.5 shadow-rounded mr-3 mb-2 text-s md:text-m hover:scale-110 ease-linear duration-75'>
									{item.name.common}
								</Link>
							))}
						</div>
					</>
				);
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	return (
		<div className='w-full min-w-mobile max-w-desktop'>
			{typeof country == 'undefined' ? (
				<div className='w-full flex justify-center mt-10'>
					<Loader />
				</div>
			) : (
				<div className='flex flex-col px-8 lg:px-5'>
					<div className='my-10 flex justify-start w-full'>
						<Link
							to='/'
							className='group shadow-rounded text-center px-10 py-1.5 text-s lg:text-m'>
							<FontAwesomeIcon
								icon={faArrowLeft}
								className='mr-2 group-hover:-translate-x-1.5 duration-100'
							/>
							Back
						</Link>
					</div>
					<main className='flex flex-col mt-5 items-start min-w-card lg:flex-row lg:items-start '>
						<div className='my-5 w-full flex justify-center lg:my-0 lg:justify-start lg:mr-5'>
							<img
								src={country.flags.svg}
								alt={`Flag of ${country.name.common}`}
							/>
						</div>
						<div className='flex flex-col lg:basis-5/6 lg:mt-5 lg:ml-10'>
							<div>
								<h2 className='font-semibold mb-2 text-xl md:text-2xl lg:mb-5'>
									{country.name.common}
								</h2>
							</div>
							<div className='flex flex-col lg:flex-row w-full mt-5 mb-10'>
								<div>
									<div className='flex'>
										<DetailsTemplate body='Native Name' />
										<DetailsContent body={getNativeName()} />
									</div>
									<div className='flex'>
										<DetailsTemplate body='Population' />
										<DetailsContent
											body={country.population.toLocaleString('en')}
										/>
									</div>
									<div className='flex'>
										<DetailsTemplate body='Region' />
										<DetailsContent body={country.region} />
									</div>
									<div className='flex'>
										<DetailsTemplate body='Sub Region' />
										<DetailsContent body={country.subregion} />
									</div>
									<div className='flex'>
										<DetailsTemplate body='Capital' />
										<DetailsContent body={country.capital.join(', ')} />
									</div>
								</div>

								<div className='mt-6 lg:mt-0 lg:ml-16'>
									<div className='flex'>
										<DetailsTemplate body='Top Level Domain' />
										<DetailsContent body={country.tld} />
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
							</div>

							<div className='flex flex-col mb-25 w-full'>
								{getBorderCountries()}
							</div>
						</div>
					</main>
				</div>
			)}
		</div>
	);
};

export default CountryPage;
