import React from 'react'
import "./Home.scss"
import Featured from '../../compontents/featured/Featured'
import TrustedBy from '../../compontents/trustedBy/TrustedBy'
//import Service from '../../compontents/Service/Service'
import Slide from '../../compontents/slide/Slide'
import {cards} from "../../data";
import {projects} from "../../data";
import CatCard from "../../compontents/catCard/CatCard";
import ProjectCard from '../../compontents/projectCard copy/projectCard';

const Home = () =>  {
    return (
        
        <div className='home'>
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={4} arrowsScroll={4}>

               {cards.map(card=>(
                <CatCard key={cards.id} item={card}/>
               ))}
            </Slide>
            <div className='features'>
                <div className='container'>
                <div className='item'>
                    <h1>NFT MARKETPLACE</h1>
                    <div className='title'>
                        <img src=''/>
                        The best for every buject
                    </div>
                    <p>hkghrkjghskgh sjksfkjghkjg bfjvbrkglgre urehgjkjkhgkrh ksfgshbasj</p>
                    <div className='title'>
                        <img src=''/>
                        The best for every buject
                    </div>
                    <p>hkghrkjghskgh sjksfkjghkjg bfjvbrkglgre urehgjkjkhgkrh ksfgshbasj</p>
                    <div className='title'>
                        <img src=''/>
                        The best for every buject
                    </div>
                    <p>hkghrkjghskgh sjksfkjghkjg bfjvbrkglgre</p>
                </div>
                
                <div className='item'>
                    <img src='./img/hero2.png'/>
                </div>
                </div>
            </div>

           <Slide slidesToShow={4} arrowsScroll={4}>

               {projects.map(card=>(
                <ProjectCard key={cards.id} item={card}/>
               ))}
            </Slide> 
        </div>
    )
}

export default Home
