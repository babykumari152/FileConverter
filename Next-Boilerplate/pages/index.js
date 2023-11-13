import React from 'react';
import Converter from '../components/converter';
import Footer from '../components/footer';
import Header from '../components/header';

const Home = ()=>{
    return (<div className='main-container'>
        
        <Header />
        <Converter />
        <Footer />
        
    </div>)
}
export default Home