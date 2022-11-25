import { StyledInfo } from "./styles";

export default function Info(props) {
   return (
      <StyledInfo>
         <h3>Sneaker Company</h3>
         <h1>Fall Limited Edition Sneakers</h1>
         <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
         <div className="prices">
            <div className="prices__left">
               <h2>$125.00</h2>
               <span className="discount">50%</span>
            </div>
            <span className="older-price">$250.00</span>
         </div>
         <div className="buttons">
            <div className="quantity">
               <button onClick={props.decreaseItemAmount} className="button__minus">
                  <i className="minus-icon" />
               </button>
               <span>{props.itemAmount}</span>
               <button onClick={props.increaseItemAmount} className="button__plus">
                  <i className="plus-icon" />
               </button>
            </div>
            <button onClick={props.addItemsToCart} className="cart__button button">
               <i className="cart__icon" />
               <span>Add to cart</span>
            </button>
         </div>
      </StyledInfo>
   )
}