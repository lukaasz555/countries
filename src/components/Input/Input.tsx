import React, { Dispatch, FC, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CountryProps } from '../CountryCard/CountryCard';

interface InputProps {
	allCountries: CountryProps[] | [];
	filtered: CountryProps[] | [];
	setFiltered: Dispatch<SetStateAction<any>>;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputValue: string;
}

const Input: FC<InputProps> = ({
	allCountries,
	filtered,
	setFiltered,
	handleInput,
	inputValue,
}) => {
	return (
		<div className='bg-white py-2.5 pl-3 shadow-tool min-w-input px-5 rounded-regular'>
			<FontAwesomeIcon icon={faMagnifyingGlass} className='mx-5' />
			<input
				type='text'
				placeholder='Search for a country...'
				className='font-sans focus:outline-none text-m'
				value={inputValue}
				onChange={handleInput}
			/>
		</div>
	);
};

export default Input;
