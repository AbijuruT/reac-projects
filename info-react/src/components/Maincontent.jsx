import '../css/MainContent.css';
const MainContent = () => {
	return (
		<main className='main__content'>
			<h1 className='main__title'>Fun facts about React</h1>
			<ul className='fact__list'>
				<li className='fact__item'>Was first released in 2013</li>
				<li className='fact__item'>Was originally created by Jordan walke</li>
				<li className='fact__item'>Has well over 100K stars on GitHub</li>
				<li className='fact__item'>Is maintained by facebook</li>
				<li className='fact__item'>
					Powers thousands of enterprise apps, including mobile apps
				</li>
			</ul>
		</main>
	);
};
export default MainContent;
