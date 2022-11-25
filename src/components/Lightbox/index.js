import { StyledLightbox } from "./styles";

export default function Lightbox(props) {
   return (
      <StyledLightbox mainImage={props.mainImagePath}>
         <div className="lightbox__content">
            <div className="lightbox__close"> 
               <button onClick={() => props.setLightboxVisibility(false)} />
            </div>
            <div className="lightbox__image">
               <button className="lightbox__previous" onClick={props.previousImage}>
                  <i />
               </button>
               <button className="lightbox__next" onClick={props.nextImage}>
                  <i />
               </button>
            </div>
            <div className="lightbox__thumbnails">
               {props.thumbnails.map((thumbnail, index) => {
                  return (
                     <i 
                        key={thumbnail} 
                        onClick={() => props.setCurrentImage(index + 1)} 
                        className={index + 1 === props.currentImage
                        ? 'thumbnail--active'
                        : undefined
                     }
                     >
                        <span className={index + 1 === props.currentImage
                           ? `image--active image-${index + 1}`
                           : `image-${index + 1}`
                        } />
                     </i>
                  )
               })}

               {/* <i className="thumbnail--active">
                  <span className="image-1 image--active" />
               </i>
               <i>
                  <span className="image-2" />
               </i>
               <i>
                  <span className="image-3" />
               </i>
               <i>
                  <span className="image-4" />
               </i> */}
            </div>
         </div>
      </StyledLightbox>
   )
}