import './App.scss';
import AppProcessSlider from './components/AppProcessSlider/AppProcessSlider.js';
import Footer from './components/Footer/Footer.js';
import HeroSection from './components/HeroSection/HeroSection.js';
import HorizontalFrameAndSlider from './components/HorizontalFrameAndSlider/HorizontalFrameAndSlider';
import Navigation from './components/Navbar/Navigation.js';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<HeroSection />
			<AppProcessSlider />
			<HorizontalFrameAndSlider imageOnLeft={true} />
			<HorizontalFrameAndSlider imageOnLeft={false} />
			<HorizontalFrameAndSlider imageOnLeft={true} />
			<Footer />
		</div>
	);
}

export default App;
