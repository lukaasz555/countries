import React, { FC } from 'react';
import { Link } from 'react-router-dom';

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
	cca3: string;
}

const CountryCard: FC<CountryProps> = ({
	name,
	population,
	region,
	flags,
	capital,
	cca3,
}) => {
	return (
		<div>
			{capital instanceof Array ? (
				<div className='bg-white rounded-regular shadow-card overflow-hidden flex flex-col justify-start m-5 w-card h-card'>
					<section>
						<img
							src={flags.png}
							alt={`Flag of ${name.common}`}
							className='w-full h-half'
						/>
					</section>
					<section className='pb-5 pt-3 px-5 flex flex-col justify-center items-start'>
						<Link
							to={`/${name.common.toLowerCase()}`}
							className='font-semibold mb-3 mt-2 text-l'>
							{name.common}
						</Link>
						<div className='flex'>
							<p className='font-semibold text-s'>Population: </p>
							<p className='text-s ml-1'>{population.toLocaleString('en')}</p>
						</div>

						<div className='flex my-0.5'>
							<p className='font-semibold text-s'>Region: </p>
							<p className='text-s ml-1'>{region}</p>
						</div>

						<div className='flex'>
							<p className='font-semibold text-s'>Capital: </p>
							<p className='text-s ml-1'>{capital.join(', ')}</p>
						</div>
					</section>
				</div>
			) : null}
		</div>
	);
};

export default CountryCard;
