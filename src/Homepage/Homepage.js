import React from 'react';
import classes from  './Homepage.module.css';
import NavBar from './containers/NavBar/NavBar';
import CtaSection from './components/CtaSection/CtaSection';
import UrlAction from './components/UrlAction/UrlAction';
import AdPrimary from './components/AdvertisementSegment/AdPrimary/AdPrimary';
import Footer from './components/Footer/Footer';


class Homepage extends React.Component {
  render () {
    return (
        <React.Fragment>
            <NavBar />
            <CtaSection />
            <UrlAction />
            <AdPrimary />
            <Footer />
        </React.Fragment>
    );
  }
}

export default Homepage;
