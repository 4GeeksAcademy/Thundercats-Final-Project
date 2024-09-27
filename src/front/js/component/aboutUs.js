import React, { useState } from 'react';
// import React from "react";
// import { Link } from "react-router-dom";
// import { DisplayOrNone } from "./conditional_renderers";
// import { Context } from "../store/appContext";
// import { useContext } from "react";
// import Gamepedia from "../../img/Gamepedia.png"
// import { Home } from "./pages/home";

// import { Single } from "./pages/single";
// import { SignUp } from "./pages/signUp";
// import { Login } from "./pages/login";
// import { ContactUs } from "./pages/ContactUs";
// import injectContext from "./store/appContext";
// import GameCard from "./component/IndividualCardView";
// import { Favorites } from "./pages/favorites";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Context } from '../store/appContext';
import Enrique from "../../img/Enrique.jpeg"
import Serena from "../../img/Serena.jpeg"
import injectContext from '../store/appContext';
// import Devito from "../../img/Devito.jpeg"


export const AboutUs = () => {
    return (<>
        {/* <div class="card d-flex mb-3">
            
        <div class="card-body">
            <h5 class="card-title">Kayla Wilson</h5>
            <p class="card-text">Person who came up with name "Team Thundercats"</p>
            <p class="card-text">Component creator </p>
            <p class="card-text">Voted Most likely to End up on a spaceship</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            <img src={Serena} class="card-img-top" alt="Serena Img"
                style={{
                    width: '25%',
                    height: 'auto',
                    alignContent: 'center'

                }}
            ></img>
        </div> */}
        <div className="card d-flex flex-row mb-3">
            {/* Image on the left */}
            <img
                src={Serena}
                className="card-img-left me-3"
                alt="Serena Img"
                style={{
                    width: '25%',
                    height: 'auto',
                    objectFit: 'cover'
                }}
            />

            {/* Text content on the right */}
            <div className="card-body flex-grow-1">
                <h1 className="card-title">Kayla Wilson</h1>
                <p className="card-text">Person who came up with name "Team Thundercats"</p>
                <p className="card-text">Component creator</p>
                <p className="card-text">HTML Wiz</p>
                <p className="card-text">Voted Most Likely to End up on a Spaceship</p>
            </div>
        </div>
        <div className="card d-flex flex-row mb-3">
            {/* Image on the left */}
            <img
                src={Enrique}
                className="card-img-left me-3"
                alt="Enrique Img"
                style={{
                    width: '25%',
                    height: 'auto',
                    objectFit: 'cover'
                }}
            />

            {/* Text content on the right */}
            <div className="card-body flex-grow-1">
                <h1 className="card-title">Kevin Flores</h1>
                <p className="card-text">Stylist Extraordinaire</p>
                <p className="card-text">Css, Bootstrap</p>
                <p className="card-text">All around swell guy</p>
                <p className="card-text">Has won more than his fair share of games of Musical Chairs</p>
            </div>
        </div>
        <div className="card d-flex flex-row mb-3">
            {/* Image on the left */}
            <img
                src="https://i.guim.co.uk/img/media/3237b8d82452ddf4e0330a04d65123c89df2ea3e/0_3027_5404_3243/master/5404.jpg?width=465&dpr=1&s=none"
                className="card-img-left me-3"
                alt="Devito Img"
                style={{
                    width: '25%',
                    height: 'auto',
                    objectFit: 'cover'
                }}
            />

            {/* Text content on the right */}
            <div className="card-body flex-grow-1">
                <h1 className="card-title">Jacob Cabot</h1>
                <p className="card-text">Creator of the Backend</p>
                <p className="card-text">Models, Routes, Flux.js</p>
                <p className="card-text">Has been called the Steve Jobs of sarcasm</p>
                <p className="card-text">Most likely to be found laying on the floor playing with dogs at parties.</p>
            </div>
        </div>

        {/* <div class="card d-flex">
        <div class="card-body">
            <h5 class="card-title">Kevin Flores</h5>
            <p class="card-text">Stylist Extraordinaire 
                    All around swell guy
            </p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            <img src={Enrique} class="card-img-bottom" 
            alt="Enrique Img"
            style={{
                width: '25%',
                height: 'auto',
                justifyContent: 'center'

            }}
            ></img>
        </div>
        </div> 
        <div class="card d-flex">
        <div class="card-body">
            <h5 class="card-title">Jacob Cabot</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            <img src="https://i.guim.co.uk/img/media/3237b8d82452ddf4e0330a04d65123c89df2ea3e/0_3027_5404_3243/master/5404.jpg?width=465&dpr=1&s=none" 
            class="card-img-bottom" 
            alt="Devito Img"
            style={{
                width: '25%',
                height: 'auto',
                justifyContent: 'center'

            }}></img>
        </div>
        </div>  */}
    </>
    )
}


