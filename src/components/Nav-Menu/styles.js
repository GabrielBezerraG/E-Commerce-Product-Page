import styled from "styled-components";

export const StyledNavMenu = styled.nav`

   .navmenu {
      position: fixed;
      top: 0;
      left: 0;
      width: 68.5%;
      height: 100%;
      z-index: 10;
      background-color: var(--white);
      padding: 1.5rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }

   .navmenu--hidden {
      display: none;
   }

   button {
      background: url(/images/icon-close.svg) center / contain no-repeat;
      width: 14px;
      height: 15px;
      border: none;
      margin-bottom: 3.6rem;
   }

   ul {
      display: flex;
      flex-direction: column;
      row-gap: 1.6rem;
   }

   li a {
      text-decoration: none;
      color: var(--dark-navy);
      font-weight: 700;
      font-size: 1.1rem;
   }

   @media screen and (min-width: 1440px) {

      .navmenu {
         position: static;
         width: auto;
      }

      .navmenu--hidden {
         display: flex;
      }

      button {
         display: none;
      }

      ul {
         flex-direction: row;
         column-gap: 2rem;
      }

      li a {
         color: var(--dark-grey);
         font-weight: 400;
         font-size: 0.95rem;
         position: relative;
         padding-bottom: 46px;
      }

      li a:hover {
         border-bottom: 4px solid var(--orange);
      }
   }
`