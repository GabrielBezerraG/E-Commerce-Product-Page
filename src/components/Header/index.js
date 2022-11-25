import Cart from "../Cart";
import NavMenu from "../Nav-Menu";
import { StyledHeader } from "./styles";

export default function Header(props) {
   return (
      <StyledHeader>
         <div className="header__left">
            <button className="header__menu-button" onClick={() => {
               props.setMenuVisibility(!props.menuVisibility)
               props.setCartVisibility(false)
               }} />
            <a className="header__logo" href="#0" />
            <NavMenu menuVisibility={props.menuVisibility} setMenuVisibility={props.setMenuVisibility} />
         </div>
         <div className="header__right">
            <div className="header__cart-section" >
               <button className="header__cart-icon" onClick={() => props.setCartVisibility(!props.cartVisibility)}>
                  <i className="header__product-count">{props.cartItems}</i>
               </button>
               {props.cartVisibility && <Cart 
                  cartItems={props.cartItems} 
                  setCartItems={props.setCartItems}
               />}
            </div>
            <button className="header__user" />
         </div>
         
      </StyledHeader>


   )
}