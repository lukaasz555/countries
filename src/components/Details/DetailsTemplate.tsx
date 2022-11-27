import React, { FC } from 'react';

const DetailsTemplate: FC<{ body: string }> = ({ body }) => (
	<p className='font-semibold text-s md:text-m'>{body}:</p>
);

export default DetailsTemplate;
