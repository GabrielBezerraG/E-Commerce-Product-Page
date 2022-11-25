import { StyledCartProduct } from "./styles"

export default function CartProduct({store}) {
   return (
      <StyledCartProduct>
         <img src="/images/image-product-1-thumbnail.jpg" alt="Pair of sneakers" />
         <h4>Fall Limited Edition Sneakers</h4>
         <span className="cart__price-amount">$125.00 x {store.cartItems}</span>
         <span className="cart__total-price">{`$${125*store.cartItems}.00`}</span>
         <button className="cart__delete-product" onClick={() => store.setCartItems(0)} />
      </StyledCartProduct>
   )
}
