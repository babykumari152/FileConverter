

import '../public/styles/global.css';
import Footer from '../components/footer';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return <div className='main-container'> <Header />
  <Component {...pageProps} />
  <Footer />
  </div>;
}

export default MyApp;
