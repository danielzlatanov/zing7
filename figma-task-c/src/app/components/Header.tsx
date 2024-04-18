'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='bg-white text-black p-4 mt-3'>
			<div className='container mx-auto max-w-7xl flex items-center justify-between'>
				<Link href='/'>
					<p className='text-2xl cursor-pointer font-semibold'>Website</p>
				</Link>

				<div className='lg:hidden pb-2'>
					<button onClick={toggleMenu} className='text-3xl'>
						&#9776;
					</button>
				</div>

				<nav className={`hidden lg:flex lg:items-center ${isMenuOpen ? 'hidden' : 'block'}`}>
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

				<div className={`hidden space-x-8 lg:flex lg:items-center ${isMenuOpen ? 'hidden' : 'block'}`}>
					<button className='hover:text-gray-500'>Профил</button>
					<button className='hover:text-gray-500 border-2 border-black rounded-lg font-medium p-3'>
						Заявка за пратка
					</button>
				</div>
			</div>

			<MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
		</header>
	);
};

export default Header;
