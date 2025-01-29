import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';    
import "./Navbar.scss"
import newRequest from '../../utils/newRequest';
//import { useNavigate } from 'react-router-dom';

const Navbar = () =>  {

    const [active,setActive] = useState(false);
    const [open,setopen] = useState(false);

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive);

        return () => {
            window.removeEventListener("scroll",isActive);
        };
        },[]);
    

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser",null);
            navigate("/")

        }catch(err) {
            console.log(err);
        }
    }

    return (
        
        <div className='navbar'>
           <div className='container'>
             <div className='logo'>
                <Link to ="/" className='link'>
                <span className='text'>NFT</span>
                </Link>
                <span className='dot'>.</span>
             </div>
             <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
                <div className="user" onClick={() => setopen(!open)}>
                    <img
                     src={currentUser.img || "./img/hero2.png"}
                     alt="" 
                    />
                    <span>{currentUser?.username}</span>
                    { open && <div className="option">{
                        currentUser?.isSeller && (
                            <>
                            <Link className='link' to ="/mygigs">Gigs</Link>
                            <Link className='link' to="/add">Add</Link>

                            </>
                        )}
                        <Link className='link' to ="/orders">Orders</Link>
                        <Link className='link' to="/msgs">Msgs</Link>
                        <Link className='link' onClick={handleLogout}>LogOut</Link>
                        </div>}
                    </div>
               ):(<>
                <Link to="/login" className="link">Sign in</Link>
                <Link className="link" to="/Resister">
                  <button>Join</button>
                </Link>
              </>)}

             </div>
             
           </div>
        
        
        </div>
    );
};

export default Navbar


