import React, { FC } from 'react';

const DetailsContent: FC<{ body: string | string[] | number }> = ({ body }) => (
	<p className='text-s ml-2'>{body}</p>
);

export default DetailsContent;
