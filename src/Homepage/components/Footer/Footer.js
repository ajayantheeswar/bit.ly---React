import React from 'react';
import classes from './Footer.module.css';

import {logo,socialIcons} from '../../../Assets/images/images';


const Footer = props => {

    const footerdata = [
        [{
            title : 'Why Bitly?',
            list : ['Bitly 101',' Integrations & API','Enterprise Class','Pricing']
        }],[
            {
                title : 'Solutions',
                list : ['Social Media','Digital Marketing','Customer Service','For Developers']
            },
            {
                title : 'Features',
                list : ['Link Management',
                   'Branded Links',
                    'Mobile Links',
                    'Campaign Management & Analytics']
            }
        ],[
            {
                title : 'Resources',
                list : ['Blog',
                    'Resource Library',
                    'Developers',
                    'Support']
            },
            {
                title : 'Legal',
                list : ['Privacy Policy',
                    'Terms of Service']
            }
        ],[
            {
                title:'Company',
                list : ['About Bitly',
                'Our Team',
                'Careers',
                'Partners',
                'Press',
                'Contact',
                'Reviews']
            }
        ]
    ];

    const section = footerdata.map(
        section => {
            return (
                <div className={classes['footer-section']} >
                    {section.map(item => {
                        return (
                            <div className={classes['footer-section-fragment']}>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.list.map(lin_item => <p>{lin_item}</p>)}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        }
    )


    return (
        <div className={classes['footer']}>
            {section}
            <div className={classes['footer-orag']}>
                <img src={logo} alt={'logo'}></img>
                <p>© 2020 Bitly Handmade in NYC, San Francisco, Denver, and all over the world.</p>
                <div className={classes['social']}>
                    {socialIcons.map((icon,index) => <img src={icon} alt={'social '+ index} />)}
                </div>
            </div>
        </div>
    )
}

export default Footer;