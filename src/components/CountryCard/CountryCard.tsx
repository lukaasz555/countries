import React, { FC, useState } from 'react';
import DetailsTemplate from '../Details/DetailsTemplate';
import DetailsContent from '../Details/DetailsContent';
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
}

const CountryCard: FC<CountryProps> = ({
	name,
	population,
	region,
	flags,
	capital,
}) => {
	const [country, setCountry] = useState<CountryProps | {}>({});

	return (
		<div>
			{capital instanceof Array ? (
				<div className='bg-white rounded-regular shadow-card overflow-hidden flex flex-col justify-between m-5 w-card'>
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
							<DetailsTemplate body='Population' />
							<DetailsContent body={population} />
						</div>

						<div className='flex my-0.5'>
							<DetailsTemplate body='Region' />
							<DetailsContent body={region} />
						</div>

						<div className='flex'>
							<DetailsTemplate body='Capital' />
							<DetailsContent body={capital.join(', ')} />
						</div>
					</section>
				</div>
			) : null}
		</div>
	);
};

export default CountryCard;
