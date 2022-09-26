import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://miro.medium.com/max/5108/1*k1OZBUe6f8pzEbjlYfYZ9A.png"
                    alt=""
                />

                <div className="home_row">
                <Product id="76479545" title='2022 Apple MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera; Silver ​​​​​​​' price={129000} image="https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg" rating={4} />
                    <Product id="76589786" title='Preethi Crown Pro MG-254 Mixer grinder, 600 watt, White/Purple, 3 Jars with 5yr Motor Warranty & Lifelong Free Service' price={2964} image="https://m.media-amazon.com/images/I/71O5F+oEp4L._SL1500_.jpg" rating={4} />
                </div>

                <div className="home_row">
                    <Product id="56745434" title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)' price={1599} image='https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg' rating={4} />
                    <Product id="89789876" title='OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)' price={2899} image='https://m.media-amazon.com/images/I/61ahn9N38zL._SL1500_.jpg' rating={5}/>
                    <Product id="12343234" title='The lean startup' price={299} image='https://rukminim1.flixcart.com/image/416/416/xif0q/book/v/m/w/the-lean-startup-original-imaghws5apcgdxgk.jpeg?q=70' rating={5} />                    
                    <Product id="45654789" title='K.P.N Plastic Magic Spring Rainbow Bouncy Stretchy Slinky Toy (Multicolour) Pack of 1' price={200} image="https://m.media-amazon.com/images/I/71vR5x1yMSL._SL1500_.jpg" rating={3}/>
                </div>

                <div className="home_row">
                    <Product id="67578976" title='Apple Watch Series 7 (GPS, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular' price={41000} image='https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg' rating={5} />
                    <Product id="52789467" title='Amazfit Zepp E Stylish Smart Watch CircleVersion , Health and Fitness Tacker with Heart Rate, SpO2 and REM Sleep Monitoring, Stainless Steel Body with Genuine Leather Band (Polar Night Black)' price={5990} image="https://m.media-amazon.com/images/I/71DqnLUaJ8L._SL1500_.jpg" rating={5} />
                    <Product id="46854357" title='Apple iPhone 13 Pro (128GB) - Sierra Blue' price={104000} image="https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="65768790" title="Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black)" price={30980} image="https://m.media-amazon.com/images/I/71B7sRIydwL._SL1500_.jpg" rating={4}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
