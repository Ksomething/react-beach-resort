import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Blends and mixes infamous in the region that will send your tastebuds flying."
            },
            {
                icon: <FaHiking />,
                title: "Hiking Trail",
                info: "See the world from a whole new view. Travel our infamous scenic route to take \
                    in the beauty of nature."
            },
            {
                icon: <FaShuttleVan />,
                title: "Tour Bus",
                info: "See the world in confort and style as you travel the land with all the luxuries\
                     of a suite at your beck and call."
            },
            {
                icon: <FaBeer />,
                title: "Brewery Tour",
                info: "Experience the finer things in beer with our historic brewery. See and taste the beer\
                    that your forefathers enjoyed."
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}