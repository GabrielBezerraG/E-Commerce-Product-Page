import styled from "styled-components";

export const StyledHeader = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem 1.5rem 1.5rem;
   position: relative;

   .header__menu-button, .header__cart-icon, .header__user {
      border: none;
      background-color: inherit;
   }

   div {
      display: flex;
      align-items: center;
   }

   .header__left {
      column-gap: 1rem;
   }

   .header__right {
      column-gap: 1.3rem;
   }


   .header__menu-button {
      background-image: url(/images/icon-menu.svg);
      width: 16px;
      height: 15px;
      
   }

   .header__logo {
      background-image: url(/images/logo.svg);
      width: 138px;
      height: 20px;
      display: inline-block;
      cursor: pointer;
   }
   
   .header__cart-icon {
      background-image: url(/images/icon-cart.svg);
      width: 22px;
      height: 20px;
      position: relative;

   }
   
   .header__product-count {
      position: absolute;
      top: -5px;
      right: -4px;
      background-color: var(--orange);
      color: var(--white);
      font-size: 0.65rem;
      border-radius: 10px;
      padding: 1px 6px;
   }

   .header__user {
      background: url(/images/image-avatar.png) center / contain no-repeat;
      width: 28px;
      height: 28px;
      background-clip: border-box;
      border: 2px solid transparent;
      border-radius: 50%;
      transition: all 200ms ease-out;
      
   }
   
   .header__user:hover {
      border-color: var(--orange);
      overflow: hidden;
   }

   @media screen and (min-width: 1440px) {

      padding: 1.25rem 10.5rem 1.5rem;
      margin-bottom: 0.25rem;

      .header__menu-button {
         display: none;
      }

      .header__left {
         column-gap: 2rem;
      }

      .header__right {
         column-gap: 2.85rem;
      }

      .header__cart-icon {
         margin-top: 1px;
      }

      .header__user {
         width: 54px;
         height: 54px;
      }
   }
`