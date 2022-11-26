import React, { FC } from 'react';

const Header: FC = () => {
	return (
		<header className='bg-white w-full shadow-bottom'>
			<div className='flex justify-between items-center w-1/1 min-w-mobile max-w-desktop my-2 mx-auto py-2 px-5 2xl:px-0'>
				<h1 className='font-extrabold text-xl py-1.5'>Where in the world?</h1>
				<p className='font-semibold text-base py-1.5'>Dark Mode</p>
			</div>
		</header>
	);
};

export default Header;
