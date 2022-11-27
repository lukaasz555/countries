import React, { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsTemplate from '../../components/Details/DetailsTemplate';
import DetailsContent from '../../components/Details/DetailsContent';
import axios from 'axios';

const CountryPage: FC = () => {
	const [country, setCountry] = useState<any>();
	const location = useLocation();

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

	console.log(getLanguages());

	return (
		<div>
			{typeof country == 'undefined' ? null : (
				<main className='flex flex-col'>
					<div>
						<img src={country[0].flags.png} alt='' />
					</div>
					<div>
						<div>
							<h2>{country[0].name.common}</h2>
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

						<div>
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
					</div>
				</main>
			)}
		</div>
	);
};

export default CountryPage;
