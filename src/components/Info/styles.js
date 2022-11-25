import styled from "styled-components";

export const StyledInfo = styled.section`

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 1.5rem;

   h3 {
      color: var(--orange);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1px;
      margin-bottom: 1.15rem;
   }

   h1 {
      font-weight: 700;
      font-size: 1.8rem;
      margin-bottom: 1.25rem;
   }

   p {
      color: var(--dark-grey);
      margin-bottom: 2rem;
      line-height: 1.58rem;
      font-size: 0.95rem;
   }

   .prices {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      .prices__left {
         display: flex;
         align-items: center;
      }

      h2 {
         font-weight: 700;
         font-size: 1.75rem;
         margin-right: 1rem;
      }

      .discount {
         background-color: var(--pale-orange);
         padding: 0.25rem 0.5rem;
         border-radius: 5px;
         color: var(--orange);
         font-weight: 700;
      }
      
      .older-price {
         color: var(--grey);
         text-decoration: line-through;
         font-weight: 700;
         font-size: 0.95rem;
         justify-self: flex-end;
      }
   }

   .buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
   }

   .quantity {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
      background-color: var(--light-grey);
      margin-bottom: 1rem;
      border-radius: 10px;
      overflow: hidden;
      
      button {
         padding: 1.35rem 1.2rem;
         border: none;
         background-color: inherit;
         display: flex;
      }
      
      button:hover {
         filter: opacity(0.65);
      }

      button i {
         background: center / contain no-repeat;
         background-color: inherit;
         border: none;
         color: var(--orange);
         font-weight: 700;
         font-size: 1.6rem;
      }


      .minus-icon {
         background-image: url(/images/icon-minus.svg);
         width: 12px;
         height: 4px;
         display: inline-block;
      }
      
      .plus-icon {
         background-image: url(/images/icon-plus.svg);
         width: 12px;
         height: 12px;
         display: inline-block;
      }

      span {
         font-weight: 700;
      }

   }

   .cart__button {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      box-shadow: 0 30px 40px -15px #ff7d1a67;

      i {
         background: url(/images/icon-cart.svg) center / contain no-repeat;
         width: 18px;
         height: 18px;
         filter: brightness(300%);
      }

      span {
         margin-top: 1px;
         font-weight: 700;
         font-size: 0.95rem;
      }
   }

   @media screen and (min-width: 1440px) {
      padding: 0;
      margin-left: 1.35rem;
      margin-top: 4rem;

      h3 {
         font-size: 0.88rem;
         margin-bottom: 1.35rem;
      }

      h1 {
         font-size: 2.75rem;
         line-height: 3rem;
         margin-bottom: 2.25rem;
      }

      p {
         font-size: 1rem;
         margin-bottom: 1.75rem;
      }

      .prices {
         flex-direction: column;
         align-items: flex-start;
         row-gap: 0.75rem;
         margin-bottom: 2.5rem;

         h2 {
            font-size: 1.85rem;
         }

         .discount {
            padding: 0.3rem 0.6rem;
         }

         .older-price {
            font-size: 1rem;
            letter-spacing: 0.5px;
         }
      }

      .buttons {
         flex-direction: row;
         column-gap: 1rem;
      }

      .quantity {
         width: 35%;
         margin-bottom: 0;

         button {
            padding: 1rem;
         }

      }
      
      .cart__button {
         flex-grow: 2;

         span {
            font-size: inherit;
         }
      }
   }

`