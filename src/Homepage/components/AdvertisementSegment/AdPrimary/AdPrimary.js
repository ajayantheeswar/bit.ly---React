import React from 'react';
import classes from './AdPrimary.module.css';

import {Ad_1,Ad_2,Ad_3} from '../../../../Assets/images/images';
import {Brands1,Brands2,Brands3,Brands4,Brands5,Brands6,Brands7,Brands8} from '../../../../Assets/images/images';

const AdPrimary = props => {

    const Ads = [{
        heading : 'Inspire trust',
        content : 'As your click numbers go up, your brand recognition increases. And the more that grows, the more confident people become in the integrity of your content and communications. (It’s a wonderful cycle.)',
        img : Ad_1
    },{
        heading : 'Boost results',
        content : 'Better deliverability and improved click-through are just the start. Rich link-level data allows you to understand who is clicking your links, as well as when and where, so you can make smarter decisions around the content and communications you share.',
        img : Ad_2
    },{
        heading : 'Gain control',
        content : 'On top of being able to fully customize your links, auto-branding boosts awareness of your brand by giving you credit for your content and more insight into how it’s being consumed.',
        img : Ad_3
    }];

    const Brands = [
        Brands1,Brands2,Brands3,Brands4,Brands5,Brands6,Brands7,Brands8
    ]


    return (
        <React.Fragment>
            <div className={classes['Ad-primary-Section-1']}>
                <h1>Grow Your Brand With Every Click</h1>
                <p>Branded links can drive a 34% higher click-through versus non-branded links, meaning they help get more eyeballs on your brand and its content.</p>
            </div>
            <div className={classes['Ad-primary-Section-2']}>
                {Ads.map((ad,index) => (
                    <div key={index} className={classes['ad-item']}>
                        <img src={ad.img} alt="ad1" />
                        <h3>{ad.heading}</h3>
                        <p>{ad.content}</p>
                    </div>
                ))}
            </div>
            <div className={classes['section-cta']}>
                <button>Get Started</button>
                <a href='#'>Learn more</a>
            </div>
            <hr style={{width: '70%' , margin:'auto'}} />
            <div className={classes['section-brands']} >
                <h1>The most recognized brands in the world love Bitly</h1>
                <ul className={classes['brand-list']}>
                    {Brands.map( (brand,index) => <img key={index} src={brand} alt={'image '+ index} />)}
                </ul>
            </div>
            <div className={classes['section-cta-secondary']} >
                <h1>More than a link shortener</h1>
                <button>Get Started For Free</button>
            </div>
        </React.Fragment>
    )
}

export default AdPrimary;