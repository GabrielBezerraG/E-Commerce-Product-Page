import styled from "styled-components";

export const StyledLightbox = styled.div`

   display: none;
   
   @media screen and (min-width: 1440px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
      cursor: pointer;
      border: none;
      background-color: inherit;
   }
   
      .lightbox__content {
         position: relative;
      }

      .lightbox__close {
         display: flex;
         justify-content: flex-end;
         margin-bottom: 1.5rem;
      }

      .lightbox__close button {
         width: 22px;
         height: 22px;
         background: url(/images/icon-close.svg) center / contain no-repeat;
         filter: brightness(2.5);
         transition: all 150ms;
      }

      .lightbox__close button:hover {
         background-image: url(/images/icon-close-orange.svg);
         filter: brightness(1);
      }

      .lightbox__image {
         transition: all 200ms background-image;
         background: center / cover no-repeat;
         background-image: ${(props) => props.mainImage};
         width: 550px;
         height: 550px;
         border-radius: 15px;
         position: relative;
         margin-bottom: 2.5rem;
      }

      .lightbox__previous, .lightbox__next {
         top: calc(50% - 35px);
         width: 55px;
         height: 55px;
         background-color: var(--white);
         position: absolute;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 50%;

         i {
            display: inline-block;
            background: center / contain no-repeat;
            transition: all 200ms;
         }
      }

      .lightbox__previous {
         left: -26px;
         
         i {
            margin-right: 5px;
            width: 12px;
            height: 18px;
            background-image: url(/images/icon-previous.svg);
         }

         :hover i {
            background-image: url(/images/icon-previous-orange.svg);
         }
      }

      .lightbox__next {
         right: -26px;
         margin-left: 5px;

         i {
            margin-left: 3px;
            width: 13px;
            height: 18px;
            background-image: url(/images/icon-next.svg);
         }

         :hover i {
            background-image: url(/images/icon-next-orange.svg);
         }
      }

     
      .lightbox__thumbnails {
         display: flex;
         width: 100%;
         box-sizing: border-box;
         justify-content: space-between;
         padding: 0 3.15rem;

         
         i {
            width: 88px;
            height: 88px;
            border-radius: 10px;
            overflow: hidden;
            background-color: var(--white);
            
            
            span {
               display: inline-block;
               background: center / cover no-repeat;
               width: 100%;
               height: 100%;
               transition: all 200ms;
            }
            
            span:hover {
               filter: opacity(0.5);
            }

         }

         
         .thumbnail--active {
            border: 2px solid var(--orange);
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

         .image--active {
         filter: opacity(0.25);
      }
      }
   }
`