

import '../public/styles/global.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { GlobalProvider } from '../public/context/GlobalContext';

function MyApp({ Component, pageProps }) {
  return <div className='main-container'>
    <GlobalProvider>
     <Header />
     <Component {...pageProps} />
     <Footer />
  </GlobalProvider>
  </div>;
}

export default MyApp;
