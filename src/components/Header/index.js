import Cart from "../Cart";
import NavMenu from "../Nav-Menu";
import { StyledHeader } from "./styles";

export default function Header({store}) {
   return (
      <StyledHeader>
         <div className="header__left">
            <button className="header__menu-button" onClick={() => {
               store.setMenuVisibility(!store.menuVisibility)
               store.setCartVisibility(false)
               }} />
            <a className="header__logo" href="#0" />
            <NavMenu store={store} />
         </div>
         <div className="header__right">
            <div className="header__cart-section" >
               <button className="header__cart-icon" onClick={() => {
                  store.setCartVisibility(!store.cartVisibility)
                  store.setMenuVisibility(false)
                  store.setLightboxVisibility(false)
               }}>
                  {store.cartItems > 0 && <i className="header__product-count">{store.cartItems}</i>}
               </button>
               {store.cartVisibility && <Cart store={store}/>}
            </div>
            <button className="header__user" />
         </div>
         
      </StyledHeader>


   )
}