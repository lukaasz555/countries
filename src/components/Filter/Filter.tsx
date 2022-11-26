import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filter: FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as Element;
		console.log(target.innerHTML);
		setOpen(!open);
	};
	return (
		<div className='relative w-filter flex justify-center items-center px-1.5 bg-white shadow-tool rounded-regular py-2 mt-3 md:mt-0'>
			<button
				className='font-sans text-s flex justify-between items-center w-full px-2'
				onClick={() => {
					setOpen(!open);
					console.log('menu on/off');
				}}>
				<p>Filter by Region</p>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`${open ? 'rotate-180' : 'rotate-0'} transition-all`}
				/>
			</button>
			<ul
				className={`absolute top-full mt-2 bg-white w-full py-2 rounded-regular ${
					open ? 'scale-y-100' : 'scale-y-0'
				} origin-top transition-all`}>
				<li>
					<button
						className='w-full text-left px-5 py-0.5 text-s'
						id='#africa'
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							handleFilter(e)
						}>
						Africa
					</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-s'>
						America
					</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-s'>Asia</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-s'>
						Europe
					</button>
				</li>
				<li>
					<button className='w-full text-left px-5 py-0.5 text-s'>
						Oceania
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filter;
