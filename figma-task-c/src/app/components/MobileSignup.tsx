import React from 'react';
import { BiMobile } from 'react-icons/bi';

const MobileSignup: React.FC = () => {
	return (
		<div className='bg-custombg text-white text-center w-full h-auto mt-24'>
			<h1 className='font-semibold text-6xl mt-20'>
				Готови ли сте да <br /> работим заедно?
			</h1>
			<p className='my-8'>
				Оставете вашият телефон и ние ще се свържем с вас, за да <br /> отговорим на всички въпроси
			</p>
			<form className='mt-10 mb-24 text-black flex items-center justify-center'>
				<div className='relative'>
					<BiMobile className='w-6 h-auto text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2' />
					<input
						type='text'
						placeholder='Мобилен телефон'
						className='p-6 pl-12 rounded-l-lg focus:border-transparent '
					/>
				</div>
				<button className='p-6 rounded-r-lg bg-customBtnBg w-32 font-medium'>Изпрати</button>
			</form>
		</div>
	);
};

export default MobileSignup;