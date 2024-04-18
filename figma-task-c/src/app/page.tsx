import Hero from './components/Hero';
import MobileSignup from './components/MobileSignup';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between  text-black'>
			<Hero />
			<MobileSignup />
		</main>
	);
}
