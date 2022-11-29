import React, { Dispatch, FC, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CountryProps } from '../CountryCard/CountryCard';

interface InputProps {
	allCountries: CountryProps[] | [];
	filtered: CountryProps[] | [];
	setFiltered: Dispatch<SetStateAction<any>>;
}

const Input: FC<InputProps> = ({ allCountries, filtered, setFiltered }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		if (value === '') {
			setFiltered(allCountries);
		} else {
			setFiltered(
				allCountries.filter((country) =>
					country.name.common.toLowerCase().includes(value)
				)
			);
		}
	};

	return (
		<div className='bg-white py-2.5 pl-3 shadow-tool min-w-input px-5 rounded-regular'>
			<FontAwesomeIcon icon={faMagnifyingGlass} className='mx-5' />
			<input
				type='text'
				placeholder='Search for a country...'
				className='font-sans focus:outline-none text-m'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleInputChange(e)
				}
			/>
		</div>
	);
};

export default Input;
