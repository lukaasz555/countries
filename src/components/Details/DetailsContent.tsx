import React, { FC } from 'react';

const DetailsContent: FC<{ body: string | string[] | number }> = ({ body }) => (
	<p className='text-s md:text-m ml-1'>{body}</p>
);

export default DetailsContent;
