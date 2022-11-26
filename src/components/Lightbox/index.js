import { StyledLightbox } from "./styles";

export default function Lightbox({ store }) {
   return (
      <StyledLightbox mainImage={store.mainImagePath}>
         <div className="lightbox__content">
            <div className="lightbox__close">
               <button onClick={() => store.setLightboxVisibility(false)} />
            </div>
            <div className="lightbox__image">
               <button className="lightbox__previous" onClick={store.previousImage}>
                  <i />
               </button>
               <button className="lightbox__next" onClick={store.nextImage}>
                  <i />
               </button>
            </div>
            <div className="lightbox__thumbnails">
               {store.thumbnails.map((thumbnail, index) => {
                  return (
                     <i
                        key={thumbnail}
                        onClick={() => store.setCurrentImage(index + 1)}
                        className={index + 1 === store.currentImage
                           ? 'thumbnail--active'
                           : undefined
                        }
                     >
                        <span className={index + 1 === store.currentImage
                           ? `image--active image-${index + 1}`
                           : `image-${index + 1}`
                        } />
                     </i>
                  )
               })}
            </div>
         </div>
      </StyledLightbox>
   )
}