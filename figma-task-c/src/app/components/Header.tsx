import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
	return (
		<header className='bg-white text-black p-4 mt-3'>
			<div className='container mx-auto max-w-7xl flex items-center justify-between'>
				<Link href='/'>
					<p className='text-2xl cursor-pointer font-semibold'>Website</p>
				</Link>

				<nav>
					<ul className='flex space-x-8'>
						<li>
							<a href='#' className=' hover:text-gray-500'>
								Начало
							</a>
						</li>
						<li>
							<a href='#' className=' hover:text-gray-500'>
								За нас
							</a>
						</li>
						<li>
							<a href='#' className=' hover:text-gray-500'>
								Услуги
							</a>
						</li>
						<li>
							<a href='#' className=' hover:text-gray-500'>
								Цени
							</a>
						</li>
						<li>
							<a href='#' className=' hover:text-gray-500'>
								Как работи
							</a>
						</li>
						<li>
							<a href='#' className=' hover:text-gray-500'>
								Контакти
							</a>
						</li>
					</ul>
				</nav>

				<div className='flex space-x-8'>
					<button className='hover:text-gray-500'>Профил</button>
					<button className='hover:text-gray-500 border-2 border-black rounded-lg font-medium p-3'>
						Заявка за пратка
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
