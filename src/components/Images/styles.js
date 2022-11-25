import styled from "styled-components";

export const StyledImages = styled.section`

     .main-image {
      transition: 200ms;     
      background: center / cover no-repeat;
      background-image: ${(props) => props.mainImage};
      max-width: 100%;
      height: 300px;
      position: relative;
   }

   .desktop-only-div {
      display: none;
   }

   .buttons button {
      position: absolute;
      top: calc(50% - 20px);
      cursor: pointer;
      border: none;
   }

   .buttons__previous, .buttons__next {
      width: 40px;
      height: 40px;
      background-color: var(--white);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      i {
         display: inline-block;
         background: center / contain no-repeat;
         transition: 200ms;
      }
   }

   .buttons__previous {
      left: 0.9rem;

      i {
         margin-right: 3px;
         width: 13px;
         height: 13px;
         background-image: url(/images/icon-previous.svg);
      }

      :hover i {
         background-image: url(/images/icon-previous-orange.svg);
      }
   }

   .buttons__next {
      right: 0.9rem;

      i {
         margin-left: 3px;
         width: 13px;
         height: 13px;
         background-image: url(/images/icon-next.svg);
      }

      :hover i {
         background-image: url(/images/icon-next-orange.svg);
      }
   }

   .thumbnails {
      display: none;
   }

   @media screen and (min-width: 1440px) {

      padding-left: 0.25rem;

      .main-image {
         width: auto;
         height: 445px;
         border-radius: 15px;
         cursor: pointer;
      }

      .desktop-only-div {
         display: block;
         position: absolute;
         top: 0;
         left: 0;
         height: 100%;
         width: 100%;
         z-index: 5;
      }

      .buttons {
         display: none;
      }

      .thumbnails {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.9rem 0;

      i {
         width: 88px;
         height: 88px;
         border-radius: 10px;
         overflow: hidden;
      }
      
      .thumbnail--active {
         border: 2px solid var(--orange);
      }
      
      .thumbnail__image {
         display: inline-block;
         background: center / cover no-repeat;
         width: 100%;
         height: 100%;
         transition: 200ms;
      }

      .thumbnail__image:hover {
         filter: opacity(0.5);
      }

      .thumbnail__image--active {
         filter: opacity(0.25);
      }

      .image-1 {
         background-image: url(/images/image-product-1-thumbnail.jpg);
      }
      
      .image-2 {
         background-image: url(/images/image-product-2-thumbnail.jpg);
      }
      .image-3 {
         background-image: url(/images/image-product-3-thumbnail.jpg);
      }
      .image-4 {
         background-image: url(/images/image-product-4-thumbnail.jpg);
      }
   }
   }
`