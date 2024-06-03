import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Notifications from './components/Notifications';
import Customize from './components/Customize';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Notifications />
      <Customize />
      <Testimonial />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
