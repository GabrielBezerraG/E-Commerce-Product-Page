import styled from "styled-components";

export const StyledCart = styled.div`
   position: absolute;
   z-index: 5;
   top: 4.25rem;
   left: 0;
   width: calc(100% - 1rem);
   margin: 0.5rem;
   box-sizing: border-box;
   background-color: var(--white);
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   box-shadow: 0 30px 40px -15px #00000042;
   
   h3 {
      align-self: flex-start;
      padding: 1.5rem 1.5rem 1rem;
      font-size: 0.95rem;
      font-weight: 700;
   }

   hr {
      width: 100%;
      border: none;
      border-bottom: 1px solid var(--grey);
      filter: brightness(120%);
   }

   .cart__content {
      min-height: 180px;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto auto;
      justify-items: stretch;
      align-items: start;
      row-gap: 0.75rem;
      width: 100%;
      padding: 1.25rem 1.5rem; 
   }

   .cart__checkout {
      align-self: start;
   }
   
   .cart__empty {
      font-weight: 700;
      grid-row: 1/3;
      color: var(--dark-grey);
      align-self: center;
      justify-self: center;
      height: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
   }

   @media screen and (min-width: 1440px) {
      width: 360px;
      left: auto;
      top: 5.5rem;
      right: 5.25rem;
   }

   h3 {
      font-size: 1rem;
      padding-bottom: 1.25rem;
   }

   .cart__content {
      padding: 1rem 1.5rem;
   }

`