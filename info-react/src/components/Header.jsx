import '../css/Header.css';
import logo from '../assets/react.svg';
export default function Header() {
	return (
		<>
			<header>
				<nav className='nav__menu'>
					<img src={logo} width='40px' alt='Logo-img' />
					<ul className='nav__list'>
						<li className='nav__item'>History</li>
						<li className='nav__item'>About</li>
						<li className='nav__item'>Contact</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
