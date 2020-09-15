import React from 'react'
import './Home.css';
import Product from '../Product/Product';
import firstImage from '../../images/products/laptop.jpeg';
import secondImage from '../../images/products/headphones.jpeg';
import thirdImage from '../../images/products/headphones-second.jpeg';
import fourthImage from '../../images/products/tv.jpeg';

function Home() {
    return (
        <div className='home'>
            <img
                className="home-image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt="banner image"
            />
            <div className='home-row'>
                <Product
                    id={123}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={firstImage}
                    price={14.99}
                />
                <Product
                    id={123}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={secondImage}
                    price={14.99}
                />
                <Product
                    id={123}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={thirdImage}
                    price={14.99}
                />
            </div>
            <div className='home-row'>
                <Product
                    className='tv-image'
                    id={123}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={fourthImage}
                    price={14.99}
                />
                <Product
                    className='tv-image'
                    id={123}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={fourthImage}
                    price={14.99}
                />
            </div>
            <div className='home-row'>
                <Product
                    className='tv-image'
                    id={123}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={fourthImage}
                    price={14.99}
                />
            </div>
        </div>
    )
}

export default Home
