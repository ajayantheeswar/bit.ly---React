import React from 'react';
import classes from './CtaSection.module.css';
import {ctaimage} from '../../../Assets/images/images';

const CtaSection = props => (
    <div className={classes['cta-section']}>
        <div className={classes['cta-head']}>
            <h1>Create Click-Worthy Links</h1>
            <h3>Build and protect your brand using powerful, recognizable short links.</h3>
            <div className={classes['cta-button__call']}>
                <button>Get Started For Free</button>
                <a href={'#'}>Get Quote</a>
            </div>
        </div>
        <div className={classes['cta-image']}>
            <img src={ctaimage} alt={'cta-action'}/>
        </div>
    </div>
);

export default CtaSection;
