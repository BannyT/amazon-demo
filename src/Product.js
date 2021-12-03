import React from 'react';
import "./Product.css"

const Product = () => {
    return <div className="product">
              <div className="product_image" >
                  <img src="https://www.collinsdictionary.com/images/full/dress_31690953_1000.jpg"/>
              </div>
              <div className="content" >
                  <h4>Blue dress</h4>
                  <h5>UGX 400000</h5>
                   <p>                                                                                                                                                                                                                                                                                                                                                                                                                          
                   To dress meat, chicken, or fish means to prepare it for cooking by cleaning it and removing the parts that you cannot eat.
                    Her mother dressed the meat
                   </p>

              </div>
              <div className="button-section">
                     <button>Add To Cart</button>
              </div>
          </div>;
}

export default Product;