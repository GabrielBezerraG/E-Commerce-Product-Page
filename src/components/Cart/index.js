import CartProduct from "../Cart-Product";
import { StyledCart } from "./styles";

export default function Cart(props) {
   return (
      <StyledCart>
         <h3>Cart</h3>
         <hr />
         <div className="cart__content">
            {props.cartItems === 0
               ? <span className="cart__empty">Your cart is empty.</span>
               : <CartProduct cartItems={props.cartItems} setCartItems={props.setCartItems} 
               />
            }
            {props.cartItems > 0 && <button className="cart__checkout button">Checkout</button> }
         </div>
      </StyledCart>
   )
}