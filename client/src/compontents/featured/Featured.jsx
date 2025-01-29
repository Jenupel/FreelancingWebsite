/*import React from 'react'
import "./Featured.scss"

const Featured = () =>  {
    return (
        <div className='featured'>
            <div className='container'>
                <div className='left'>
                   <h1>Disvoer,Collect,and Sell NFTs</h1>
                   <div className='search'>
                    <div className='searchInput'>
                        <img src="" alt=''/>
                        <input type='text' placeholder='try "building mobile app"'/>
                    </div>
                    <button>Search</button>
                   </div>
                   <div className='popular'>
                    <span>Popular:</span>
                    <button>web Servace</button>
                    <button>Logo</button>
                    <button>Mobile Servace</button>
                    <button>AI Servace</button>
                   </div>
                </div>
                <div className='right'>
                    <img src='./img/pic1.png' alt=''/>

                </div>
            </div>
        </div>
    )
}

export default Featured*/

import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Disvoer,Collect,and Sell NFTs
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/pic1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
