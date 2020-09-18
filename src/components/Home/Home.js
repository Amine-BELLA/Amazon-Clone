import React from 'react'
import './Home.css';
import Product from '../Product/Product';
import firstImage from '../../images/products/laptop.jpeg';
import sixthImage from '../../images/products/laptop-second.jpeg';
import secondImage from '../../images/products/headphones.jpeg';
import thirdImage from '../../images/products/headphones-second.jpeg';
import fourthImage from '../../images/products/tv.jpeg';
import fifthImage from '../../images/products/headphones-third.jpeg';
import keyboardFirst from '../../images/products/keyboard.jpeg';
import keyboardSecond from '../../images/products/keyboard-second.jpeg';
import keyboardThird from '../../images/products/keyboard-third.jpeg';


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
                    id={1}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71zW4NXBIXL._AC_SL1500_.jpg"
                    price={14.99}
                />
                <Product
                    id={2}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dXf56rv0L._AC_SL1500_.jpg"
                    price={12.99}
                />
                <Product
                    id={3}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81wdDf6o-QL._AC_SL1500_.jpg"
                    price={20}
                />
            </div>
            <div className='home-row'>
                <Product
                    id={4}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={fifthImage}
                    price={19.99}
                />
                <Product
                    id={5}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/81lmAL14poL._AC_SL1500_.jpg"
                    price={20.99}
                />
            </div>
            <div className='home-row'>
                <Product
                    id={6}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={firstImage}
                    price={31}
                />
                <Product
                    id={7}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={secondImage}
                    price={22}
                />
                <Product
                    id={8}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image={fourthImage}
                    price={18.99}
                />
            </div>
            <div className='home-row'>
                <Product
                    id={9}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg"
                    price={14.99}
                />
            </div>
        </div>
    )
}

export default Home
