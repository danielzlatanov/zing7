import React from 'react';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	return (
		<div className={`lg:hidden bg-white w-full p-4 border-b border-black ${isOpen ? 'absolute left-0' : 'hidden'}`}>
			<ul className='flex flex-col space-y-4'>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						Начало
					</a>
				</li>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						За нас
					</a>
				</li>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						Услуги
					</a>
				</li>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						Цени
					</a>
				</li>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						Как работи
					</a>
				</li>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						Контакти
					</a>
				</li>
				<li>
					<a href='#' className=' hover:text-gray-500' onClick={onClose}>
						Профил
					</a>
				</li>
				<button
					className='hover:text-gray-500 border-2 border-black rounded-lg font-medium p-3 w-fit'
					onClick={onClose}>
					Заявка за пратка
				</button>
			</ul>
		</div>
	);
};

export default MobileMenu;
