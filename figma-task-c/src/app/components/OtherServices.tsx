import React from 'react';

const OtherServices: React.FC = () => {
	return (
		<div className='my-20 mx-auto'>
			<h1 className='text-4xl text-gray-800 font-semibold mb-14'>Други услуги</h1>

			<div className='flex flex-row space-x-6 text-lg'>
				<div>
					<img src='/1.png' alt='card-img1' className='rounded-2xl mb-6' />
					<span className='font-semibold pl-2'>Опасни товари (ADR)</span>
				</div>

				<div>
					<img src='/2.png' alt='card-img2' className='rounded-2xl mb-6' />
					<span className='font-semibold pl-2'>Хладилен транспорт</span>
				</div>

				<div>
					<img src='/3.png' alt='card-img3' className='rounded-2xl mb-6' />
					<span className='font-semibold pl-2'>Извънгабаритни товари</span>
				</div>
			</div>
		</div>
	);
};

export default OtherServices;
