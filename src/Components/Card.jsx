import React from "react";
import "./Card.css"
export default function Card(){
    return(
        <div className="Card">
            <div className="Imgpart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg" alt="This is a img" />
            </div>
            <div className="Text">
                <h3>Iphone</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Rs-70,000</p>
            </div>
        </div>
    )
}