import {cart} from '../data/cart.js';

cart.forEach((cartItem) => {

  <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="images/products/intermediate-composite-basketball.jpg">

              <div class="cart-item-details">
                <div class="product-name">
                  Intermediate Size Basketball
                </div>
                <div class="product-price">
                  $20.95
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">1</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>
};