import React from 'react';

const OtherServices: React.FC = () => {
	return (
		<div className='my-20 mx-auto'>
			<h1 className='text-4xl text-gray-800 font-semibold mb-14 text-center md:text-left md:pl-6'>Други услуги</h1>

			<div className='flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-x-6 md:space-y-0 text-lg px-6'>
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
