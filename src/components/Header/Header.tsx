import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	return (
		<header className='bg-white w-full shadow-bottom'>
			<div className='flex justify-between items-center w-1/1 min-w-mobile max-w-desktop my-2 mx-auto py-2 px-8 lg:px-5'>
				<h1>
					<Link to='/' className='font-extrabold text-xl py-1.5'>
						Where in the world?
					</Link>
				</h1>

				<button
					className='flex justify-around items-center hidden'
					/* onClick={() => console.log('mode switched')} */
				>
					<FontAwesomeIcon icon={faMoon} className='mr-2' />
					<p className='font-semibold text-base py-1.5'>Dark Mode</p>
				</button>
			</div>
		</header>
	);
};

export default Header;
