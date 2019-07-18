import React from 'react';
import './sass/style.scss';
//comp
import Header from './components/headerComponent/header';
import Banner from './components/bannerComponent/banner';
import List from './components/listComponent/list';
import Contact from './components/contactComponent/contact';
import Footer from './components/footerComponent/footer';

function App() {
  return (
    <div className="adeo">
      <Header />
      <Banner />
      <List />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
