import { StyledImages } from "./styles";

export default function Images({store}) {
   return (
      <StyledImages mainImage={store.mainImagePath}>
         <div className="main-image">
            <div className="desktop-only-div" onClick={() => {store.setLightboxVisibility(true)
               store.setCartVisibility(false)
            }} />
            <div className="buttons">
               <button onClick={store.previousImage} className="buttons__previous">
                  <i />
               </button>
               <button onClick={store.nextImage} className="buttons__next">
                  <i />
               </button>
            </div>
         </div>
         <div className="thumbnails">
            {store.thumbnails.map((thumbnail, index) => {
               return (
                  <i key={thumbnail} 
                     onClick={() => store.setCurrentImage(index + 1)} 
                     className={index + 1 === store.currentImage ? 'thumbnail--active' : undefined}
                  >
                     <span className={index + 1 === store.currentImage 
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