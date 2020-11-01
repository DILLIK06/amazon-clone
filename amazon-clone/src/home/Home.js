import React from 'react';
import './Home.css';
import Product from '../product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_WhatsyourmoodGridVersion/bf51097d-b07b-435c-a0b8-21d01d21affe._UR3000,600_SX1500_FMwebp_.jpg"
                    alt="container" />

                <div className="home_row">
                    <Product title="The Lean start-up" image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        price={5} rating={3} />
                    <Product title="The Lean start-up" image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        price={5} rating={3} />
                </div>
                <div className="home_row">
                    <Product title="The Lean start-up" image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        price={5} rating={3} />
                    <Product title="The Lean start-up" image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        price={5} rating={3} />
                    <Product title="The Lean start-up" image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        price={5} rating={3} />
                </div>
                <div className="home_row">
                    <Product title="The Lean start-up" image='https://www.lg.com/in/images/monitors/MD05949138/gallery/medium01.jpg'
                        price={5} rating={3} />
                </div>

            </div>

        </div>
    )
}

export default Home
