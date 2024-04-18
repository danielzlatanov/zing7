import React from 'react';

const Hero: React.FC = () => {
	return (
		<div className='text-center'>
			<h1 className='font-semibold text-5xl mt-10'>
				Гъвкави решения за <br />
				сухопътен транспорт за <br />
				всеки клиент
			</h1>

			<img src='/hero-img.png' alt='hero-img' className='mx-auto w-8/12 h-full my-12' />

			<div className='w-6/12 mx-auto text-left'>
				<section className='first-section'>
					<h1 className='font-bold text-4xl mb-10 mt-20'>Решения</h1>
					<p className='mb-8'>
						Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове
						бизнес – от малки местни предприятия до мултинационални компании.
					</p>
					<p>
						Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и
						професионално.
					</p>
					<ul className='list-disc ml-6'>
						<li>
							Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)
						</li>
						<li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
						<li>Взимане на стоки и доставки за от и в България;</li>
						<li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
						<li>Регулярни групажни линии;</li>
						<li>Транспортни услуги до Турция и Близкия изток;</li>
						<li>
							Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични
							изисквания.
						</li>
					</ul>
				</section>

				<section className='second-section text-left'>
					<h1 className='font-bold text-4xl mt-12 mb-10'>Предимства</h1>
					<p className='mb-8'>
						Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове
						бизнес – от малки местни предприятия до мултинационални компании.
					</p>
					<p>
						Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и
						професионално.
					</p>
				</section>
			</div>
		</div>
	);
};

export default Hero;
