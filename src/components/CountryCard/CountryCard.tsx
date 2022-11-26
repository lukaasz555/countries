import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import DetailsTemplate from '../Details/DetailsTemplate';
import DetailsContent from '../Details/DetailsContent';

export interface CountryProps {
	name: {
		common: string;
	};
	population: number;
	region: string;
	flags: {
		png: string;
	};
	capital: string[];
}

const CountryCard: FC<CountryProps> = ({
	name,
	population,
	region,
	flags,
	capital,
}) => {
	const [country, setCountry] = useState<CountryProps | {}>({});
	/* 	const [country, setCountry] = useState<any[]>([]);
	useEffect(() => {
		const data = axios
			.get('https://restcountries.com/v3.1/name/brasil')
			.then((res) => {
				setCountry(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, []); */

	console.log(name, population, region, flags);

	return (
		<div>
			{country ? (
				<div className='bg-white rounded-regular shadow-card overflow-hidden flex flex-col justify-between m-5 w-card'>
					<section>
						<img
							src={flags.png}
							alt={`Flag of ${name.common}`}
							className='w-full h-half'
						/>
					</section>
					<section className='pb-5 pt-3 px-5 flex flex-col justify-center items-start'>
						<h2 className='font-semibold mb-3 mt-2 text-l'>{name.common}</h2>
						<div className='flex'>
							<DetailsTemplate body='Population' />
							<DetailsContent body={population} />
						</div>

						<div className='flex my-0.5'>
							<DetailsTemplate body='Region' />
							<DetailsContent body={region} />
						</div>

						<div className='flex'>
							<DetailsTemplate body='Capital' />
							<DetailsContent body={capital} />
						</div>
					</section>
				</div>
			) : (
				'niema'
			)}
		</div>
	);
};

export default CountryCard;

{
	/* <div>
			{country.length > 0 ? (
				<div className='bg-white rounded-regular shadow-card overflow-hidden flex flex-col justify-between m-5 w-card'>
					<section>
						<img
							src={country[0].flags.png}
							alt={`Flag of ${country[0].name.common}`}
							className='w-full h-half'
						/>
					</section>
					<section className='pb-5 pt-3 px-5 flex flex-col justify-center items-start'>
						<h2 className='font-semibold mb-3 mt-2 text-l'>
							{country[0].name.common}
						</h2>
						<div className='flex'>
							<DetailsTemplate body='Population' />
							<DetailsContent body={country[0].population} />
						</div>

						<div className='flex my-0.5'>
							<DetailsTemplate body='Region' />
							<DetailsContent body={country[0].region} />
						</div>

						<div className='flex'>
							<DetailsTemplate body='Capital' />
							<DetailsContent body={country[0].capital} />
						</div>
					</section>
				</div>
			) : (
				'niema'
			)}
		</div> */
}
