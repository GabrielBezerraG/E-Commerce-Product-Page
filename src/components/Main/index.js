import { StyledMain } from "./styles";
import Images from "../Images";
import Info from "../Info";
import Lightbox from "../Lightbox";

export default function Main(props) {
   return (
      <StyledMain>
         <div className="horizontal-line" />
         <div className="main-content">
            <Images 
               setLightboxVisibility={props.setLightboxVisibility} 
               currentImage={props.currentImage}
               nextImage={props.nextImage}
               previousImage={props.previousImage}
               mainImagePath={props.mainImagePath}
               thumbnails={props.thumbnails}
               setCurrentImage={props.setCurrentImage}
               setCartVisibility={props.setCartVisibility}
               />
            <Info 
               itemAmount={props.itemAmount}
               increaseItemAmount={props.increaseItemAmount}
               decreaseItemAmount={props.decreaseItemAmount}
               setCartItems={props.setCartItems}
               cartItems={props.cartItems}
               addItemsToCart={props.addItemsToCart}
            />
            {props.lightboxVisibility && 
            <Lightbox 
               setLightboxVisibility={props.setLightboxVisibility} 
               currentImage={props.currentImage}
               nextImage={props.nextImage}
               previousImage={props.previousImage}
               mainImagePath={props.mainImagePath}
               thumbnails={props.thumbnails}
               setCurrentImage={props.setCurrentImage}
            />}
         </div>
         {props.lightboxVisibility && <div className="lightbox-background" />}
         {props.menuVisibility && <div className="background-faded" />}
      </StyledMain>
   )
}