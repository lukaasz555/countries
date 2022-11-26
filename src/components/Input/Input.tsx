import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Input: FC = () => {
	return (
		<div className='bg-white p-2.5 shadow-tool w-input rounded-regular'>
			<FontAwesomeIcon icon={faMagnifyingGlass} className='mx-5' />
			<input
				type='text'
				placeholder='Search for a country...'
				className='font-sans mr-5 focus:outline-none text-m'
			/>
		</div>
	);
};

export default Input;
