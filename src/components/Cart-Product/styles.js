import styled from "styled-components";

export const StyledCartProduct = styled.article`
   display: grid;
   grid-template: auto auto / auto auto 1fr auto;
   align-items: center;

   img {
      grid-area: 1/1/3/2;
      width: 50px;
      margin-right: 1rem;
      border-radius: 5px;
   }

   h4 {
      grid-area: 1/2/2/4;
      color: var(--dark-grey);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-right: 2.5rem;
   }

   .cart__price-amount {
      grid-area: 2/2/3/3;
      margin-right: 0.5rem;
      color: var(--dark-grey);
   }
   
   .cart__total-price {
      grid-area: 2/3/3/4;
      font-weight: 700;
   }

   .cart__delete-product {
      background-color: inherit;
      border: none;
      grid-area: 1/4/3/5;
      background: url(/images/icon-delete.svg) center / contain no-repeat;
      width: 14px;
      height: 16px;
      align-self: center;
   }

   @media screen and (min-width: 1440px) {
      h4 {
         margin-right: 1rem;
      }

      .cart__total-price {
         font-size: 1.05rem;
      }
   }
`