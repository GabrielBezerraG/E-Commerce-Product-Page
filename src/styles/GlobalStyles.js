import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root {
      --orange: #ff7d1a;
      --pale-orange: #ffede0;

      --dark-navy: #1d2025;
      --dark-grey: #68707d;
      --grey: #b6bcc8;
      --light-grey: #f7f8fd;
      --white: #ffffff;
      --black: #000000;

      --lightbox-background: #000000bf;
      --border-grey: #dfe4ee

   }

   html {
      font-family: 'Kumbh Sans', sans-serif;
      color: var(--black);
   }
   
   .main-container {
      background-color: var(--white);
      max-width: 1440px;
      margin: 0 auto;
   }

   button, i {
      cursor: pointer;
   }

   .button {
      background-color: var(--orange);
      color: var(--pale-orange);
      font-weight: 700;
      font-family: inherit;
      font-size: 0.95rem;
      border: none;
      border-radius: 10px;
      align-self: stretch;
      padding: 1.1rem;
   }

   .button:hover {
      filter: opacity(0.65);
   }

   @media screen and (min-width: 1440px) {
      .button {
         font-size: 1rem;
      }
   }
   
`