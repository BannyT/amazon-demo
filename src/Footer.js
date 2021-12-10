import React from 'react';
import "./Footer.css"



const Footer = () => {
    return <div className='main-footer'>
             <div className="footer-collumns">
                <div className='collum-1'>
                       
                       <img className='img' src="data:image/jpeg;base64,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" />
                       <br />
                       <br />
                       <h3 className="brand">Shopping  App</h3>
                       <p className="paragraph">
                       We  offer mobile barbers a platform to access their customers online, book appointments and get worked on at their time of convinience
                       </p>
                       <p style={{ color: "skyblue", fontSize: 13 }}>
                       Contact Us : +256705183809
                       </p>
                       <p style={{ color: "skyblue", fontSize: 13 }}>
                       E-Mail Address :tumusiimebarnabus@gmail.com
                       </p>
               </div>

               <div className='collumn-2'>
                       <h3 className='title'>Quick Links</h3>
                       <hr />
                       <p>
                       <a className='link'>
                           About
                       </a>
                       </p>
                       <p>
                       <a className='link'>
                           Contact US
                       </a>
                       </p>
                       <p>
                       <a className='link'>
                           FaQs
                       </a>
                       </p>
                       <p>
                       <a className='link'>
                           Privacy policy
                       </a>
                       </p>
              </div>

              <div className='collumn-3'>
                   <h3 className='title'>Account</h3>
                   <hr />
                   <p>
                    <a className="link">Home</a>   
                   
                   </p>
                   <p>
                   <a className="link">Products</a> 
                   </p>
                   <p>
                   <a className="link">Profile</a> 
                   </p>
                   <p>
                   <a className="link">logout</a> 
                   </p>
              </div>

              <div className='collumn-4'>
                   <h3 className="title">Newsletter</h3>
                   <hr />
                   <p className='paragraph'>
                   Get to know about our new hair products and styles everyday
                   <i>We will get back to you as soon as possible</i>
                   </p>
                   <br />
                   <div className="mb-3">
                   <input
                       placeholder="Email Address"
                       type="text"
                   />
                       <button className='button' >Subscribe</button>
                   </div>
               </div> 

             </div>
       <div className="footerLast">
                <p
                style={{
                    textAlign: "center",
                    color:'white',
                    fontSize: 13,
                    fontFamily: "Raleway",
                }}
                >
                Copyright © 2020 All rights reserved &nbsp; &nbsp; | &nbsp; &nbsp;
                Designed by muk students
                </p>
      </div>
               
</div>;


}


export default Footer;