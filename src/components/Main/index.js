import { StyledMain } from "./styles";
import Images from "../Images";
import Info from "../Info";
import Lightbox from "../Lightbox";

export default function Main({store}) {
   return (
      <StyledMain>
         <div className="horizontal-line" />
         <div className="main-content">
            <Images store={store} />
            <Info store={store} />
            {store.lightboxVisibility && 
            <Lightbox store={store} />}
         </div>
         {store.lightboxVisibility && <div className="lightbox-background" />}
         {store.menuVisibility && <div className="background-faded" />}
      </StyledMain>
   )
}