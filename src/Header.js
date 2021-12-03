import React from 'react'
import "./Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () => {
  return (
    <div className="main-division">
        <img className="logo" src="https://www.amazon.com/ref=nav_logo"/>
         <h5 className="location">Makerere,Kampala</h5>
         <div className="search-bar">
             <input type="text" placeholder="Search for products"  />
         </div>
         <div className="options">
              <div className="login-details">
                  <small>
                      login
                  </small>
                  <small>
                      SignUp
                  </small>
              </div>
              <div className="Cart">
                 <ShoppingCartIcon className="basket"/>
              </div>
         </div>
    </div>
  )
}

export default Header
