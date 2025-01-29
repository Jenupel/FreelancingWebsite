import React from 'react';
import "./gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { Link,useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from '../../compontents/reviews/Reviews';

function Gig  ()   {

    const { id } = useParams();

    const { isLoading, error, data} = useQuery({
        queryKey: ["gig"],
        queryFn: () =>
          newRequest.get(`/gigs/single/${id}`).then((res) => {
            return res.data;
          }),
      });

    const userId = data?.userId; 

    const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
      } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
          newRequest.get(`/users/${userId}`).then((res) => {
            return res.data;
          }),
        enabled: !!userId,
      });

    return (
        
        <div className='gig'>
            {isLoading ? (
            "loading"
             ) : error ? (
            "Something went wrong!"
            ) : (
            <div className="container">
                <div className="left">
                <span className='breadcrumbs'>FIVERR GRAPHICS & DESIGN</span>
                <h1>{data.title}</h1>
                {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
    
                <div className="user">
                    <img 
                    className='pp'
                    src={dataUser.img || "/img/noavatar.png"}
                  alt=""
                  />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.jpg" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
              <Slider slidesToShow={1} arrowScroll={1} className='slider'>
                    {data.images.map((img) => ( 
                    <img key={img} src={img} alt="" />
                    ))}
              </Slider>
                <h2>About This NFT</h2>
                <p>{data.desc}</p>
                {isLoadingUser ? (
                "loading"
                ) : errorUser ? (
                "Something went wrong!"
                ) : (

                 <div className="seller">
                    <h2>About Seller</h2>
                    <div className="user">
                    <img src={dataUser.img || "/img/noavatar.png"} alt="" />
                        <div className="info">
                            <span>{dataUser.username}</span>
                            {!isNaN(data.totalStars / data.starNumber) && (
                            <div className="stars">
                               {Array(Math.round(data.totalStars / data.starNumber))
                               .fill()
                               .map((item, i) => (
                               <img src="/img/star.jpg" alt="" key={i} />
                          ))}
                            <span>{Math.round(data.totalStars / data.starNumber)}</span>
                            </div>
                            )}
                          <button>Contact Me</button>
                    </div> 
                 </div>
                       
                     <div className="box">
                        <div className="items">
                            <div className="item">
                                <span className="title">From</span>
                                <span className="desc">{dataUser.country}</span>
                            </div>
                            <div className="item">
                                <span className="title">Member Since</span>
                                <span className="desc">Aug 2022</span>
                            </div>
                            
                            <div className="item">
                                <span className="title">Avg, response time</span>
                                <span className="desc">4 hours</span>
                            </div>
                            <div className="item">
                                <span className="title">last Delivery</span>
                                <span className="desc">1 day</span>
                            </div>
                            <div className="item">
                                <span className="title">Languages</span>
                                <span className="desc">English</span>
                            </div>
                        </div>
                        <hr/>
                        <p>
                        {dataUser.desc}
                        </p>
                    </div>

                </div>
                )}
                <Reviews gigId={id}/>
                
                {/*<div className="review">
                    <h2>Review</h2>
                    <div className="item">
                        <div className="user">
                            <img
                            className='pp'
                            src='./img/user-1.png' alt=''/>
                            <div className="info">
                                <span>Jenu</span>
                                <div className="country">
                                    <img src='./img/Us.jpg' alt=''/>
                                    <span>United States</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <span>5</span>
                          </div>
                          <p>FishBallerz are 4,444 one-of-a-kind pieces of art minted on the Ethereum blockchain
                          and the genesis generative collection for Sloppy Studios. Sloppy Studios was founded by former Rick & Morty Animation Supervisor Sloppypencil,
                          and is releasing FishBallerz in partnership with Backhouse Music.
                          </p>
                          <div className="helpful">
                            <span>Helpful?</span>
                            <img src='./img/like.png' alt=''/>
                            <span>Yes</span>
                            <img src='./img/dislike.png' alt=''/>
                            <span>No</span>
                          </div>
                    </div>
                    <hr/>

                    <div className="item">
                        <div className="user">
                            <img 
                            className='pp'
                            src='./img/user-1.png' alt=''/>
                            <div className="info">
                                <span>Jenu</span>
                                <div className="country">
                                    <img src='./img/Us.jpg' alt=''/>
                                    <span>United States</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <span>5</span>
                          </div>
                          <p>FishBallerz are 4,444 one-of-a-kind pieces of art minted on the Ethereum blockchain
                          and the genesis generative collection for Sloppy Studios. Sloppy Studios was founded by former Rick & Morty Animation Supervisor Sloppypencil,
                          and is releasing FishBallerz in partnership with Backhouse Music.
                          </p>
                          <div className="helpful">
                            <span>Helpful?</span>
                            <img src='./img/like.png' alt=''/>
                            <span>Yes</span>
                            <img src='./img/dislike.png' alt=''/>
                            <span>No</span>
                          </div>
                    </div>
                    <hr/>

                    <div className="item">
                        <div className="user">
                            <img 
                            className='pp'
                            src='./img/user-1.png' alt=''/>
                            <div className="info">
                                <span>Jenu</span>
                                <div className="country">
                                    <img src='./img/Us.jpg' alt=''/>
                                    <span>United States</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <img src='./img/star.jpg' alt=''/>
                               <span>5</span>
                          </div>
                          <p>FishBallerz are 4,444 one-of-a-kind pieces of art minted on the Ethereum blockchain
                          and the genesis generative collection for Sloppy Studios. Sloppy Studios was founded by former Rick & Morty Animation Supervisor Sloppypencil,
                          and is releasing FishBallerz in partnership with Backhouse Music.
                          </p>
                          <div className="helpful">
                            <span>Helpful?</span>
                            <img src='./img/like.png' alt=''/>
                            <span>Yes</span>
                            <img src='./img/dislike.png' alt=''/>
                            <span>No</span>
                          </div>
                    </div>
                </div>*/}
            </div>
                 
                 
                 
                <div className="right">
                    <div className="price">
                        <h3>{data.shortTitle}</h3>
                        <h2>$ {data.price}</h2>
                    </div>
                    <p>{data.shortDesc}</p>
                    <div className="details">
                        <div className="item">
                           <img src="/img/clock.png" alt=''/>
                           <span>{data.deliveryTime} Days Delivery</span>
                        </div>
                        <div className="item">
                           <img src="/img/recycle.png" alt=''/>
                           <span>{data.revisionNumber} Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                    {data.features.map((feature) => (
                        <div className="item" key={feature}>
                        <img src="/img/greencheck.png" alt="" />
                        <span>{feature}</span>
                      </div>
                    ))}
            
                   </div>
                      <Link to={`/pay/${id}`}>
                      <button>Continue</button>
                      </Link>
                    </div>
                
            </div>
            )}
        </div>
    );
};
export default Gig

