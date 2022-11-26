import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filter: FC = () => {
	return (
		<div className='relative bg-darkBG w-filter flex justify-center items-center px-1.5 bg-white shadow-tool rounded-regular py-2 mt-3 md:mt-0'>
			<button className='font-sans text-sm flex justify-between items-center w-full px-2'>
				<p>Filter by Region</p>
				<FontAwesomeIcon icon={faChevronDown} />
			</button>
			<ul className='absolute top-full mt-2 bg-white w-full py-2 rounded-regular'>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-sm'>
						Africa
					</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-sm'>
						America
					</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-sm'>Asia</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-sm'>
						Europe
					</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-sm'>
						Oceania
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filter;
