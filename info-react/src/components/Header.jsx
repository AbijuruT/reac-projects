import logo from '../assets/react.svg';
import '../css/Header.css';
const Header = () => {
	return (
		<header id='main-header'>
			<nav className='main__nav'>
				<div className='logo'>
					<img src={logo} alt='logo' className='nav__logo' />
					<h3 className='nav__title'>ReactFacts</h3>
				</div>
				<h4 className='nav__subtitle'>React Course-Project 1</h4>
			</nav>
		</header>
	);
};
export default Header;
