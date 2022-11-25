import CartProduct from "../Cart-Product";
import { StyledCart } from "./styles";

export default function Cart({store}) {
   return (
      <StyledCart>
         <h3>Cart</h3>
         <hr />
         <div className="cart__content">
            {store.cartItems === 0
               ? <span className="cart__empty">Your cart is empty.</span>
               : <CartProduct store={store}/>
            }
            {store.cartItems > 0 && <button className="cart__checkout button">Checkout</button> }
         </div>
      </StyledCart>
   )
}