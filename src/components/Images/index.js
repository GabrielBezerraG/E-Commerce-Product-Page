import { StyledImages } from "./styles";

export default function Images(props) {
   return (
      <StyledImages mainImage={props.mainImagePath}>
         <div className="main-image">
            <div className="desktop-only-div" onClick={() => {props.setLightboxVisibility(true)
               props.setCartVisibility(false)
            }} />
            <div className="buttons">
               <button onClick={props.previousImage} className="buttons__previous">
                  <i />
               </button>
               <button onClick={props.nextImage} className="buttons__next">
                  <i />
               </button>
            </div>
         </div>
         <div className="thumbnails">
            {props.thumbnails.map((thumbnail, index) => {
               return (
                  <i key={thumbnail} 
                     onClick={() => props.setCurrentImage(index + 1)} 
                     className={index + 1 === props.currentImage ? 'thumbnail--active' : undefined}
                  >
                     <span className={index + 1 === props.currentImage 
                     ? `thumbnail__image image-${index+1} thumbnail__image--active`
                     : `thumbnail__image image-${index+1}`
                     } />
                  </i>
               )
            })}
         
         </div>
      </StyledImages>
   )
}