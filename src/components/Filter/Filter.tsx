import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CountryProps } from '../CountryCard/CountryCard';

interface FilterProps {
	allCountries: CountryProps[] | [];
	setFiltered: React.Dispatch<React.SetStateAction<CountryProps[]>>;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	filterByRegion: (e: any) => void;
}

const Filter: FC<FilterProps> = ({
	allCountries,
	setFiltered,
	open,
	setOpen,
	filterByRegion,
}) => {
	const showAll = () => {
		setFiltered(allCountries);
		setOpen(false);
	};

	return (
		<div className='relative w-filter flex justify-center items-center px-1.5 bg-white shadow-tool rounded-regular py-2 mt-3 md:mt-0'>
			<button
				className='font-sans text-s flex justify-between items-center w-full px-2'
				onClick={() => setOpen(!open)}>
				<p>Filter by Region</p>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`${open ? 'rotate-180' : 'rotate-0'} transition-all`}
				/>
			</button>
			<ul
				className={`absolute top-full mt-2 bg-white w-full py-2 rounded-regular ${
					open ? 'scale-y-100' : 'scale-y-0'
				} origin-top transition-all z-10`}>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s my-1'
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							filterByRegion(e)
						}>
						Africa
					</button>
				</li>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s my-1'
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							filterByRegion('Americas')
						}>
						America
					</button>
				</li>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s my-1'
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							filterByRegion(e)
						}>
						Asia
					</button>
				</li>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s my-1'
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							filterByRegion(e)
						}>
						Europe
					</button>
				</li>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s my-1'
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							filterByRegion(e)
						}>
						Oceania
					</button>
				</li>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s my-1'
						onClick={showAll}>
						All countries
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filter;
