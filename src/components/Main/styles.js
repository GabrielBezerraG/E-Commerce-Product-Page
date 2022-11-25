import styled from "styled-components";

export const StyledMain = styled.main`

   .horizontal-line {
      display: none;
   }

   .lightbox-background {
      display: none;
   }

   .background-faded {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--lightbox-background);
   }

   @media screen and (min-width: 1440px) {

      .main-content {
         display: grid;
         grid-template-columns: 44% 1fr;
         column-gap: 6.5rem;
         padding: 0 13rem;
         width: 100%;
         box-sizing: border-box;
      }

      .lightbox-background {
         display: block;
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: var(--lightbox-background);
      }

      .horizontal-line {
         display: block;
         border-bottom: 1px solid var(--border-grey);
         margin: 0 10.5rem 5.6rem;
      }

      .background-faded {
         display: none;
      }
   }

`