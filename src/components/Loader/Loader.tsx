import React, { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import '../../../node_modules/react-loader-spinner/dist/loader/RotatingLines';

const Loader: FC = () => (
	<div className='mt-10'>
		<RotatingLines
			width='70'
			strokeColor='hsl(207, 26%, 17%)'
			strokeWidth='3'
			animationDuration='1.25'
			visible={true}
		/>
	</div>
);

export default Loader;
