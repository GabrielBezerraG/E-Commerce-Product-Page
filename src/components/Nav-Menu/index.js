import { StyledNavMenu } from "./styles";

export default function NavMenu({store}) {
   return (
      <StyledNavMenu>
         <div className={store.menuVisibility ? 'navmenu' : 'navmenu navmenu--hidden'}> 
            <button onClick={() => store.setMenuVisibility(!store.menuVisibility)} />
            <ul>
               <li>
                  <a href="#0">Collections</a>
               </li>
               <li>
                  <a href="#0">Men</a>
               </li>
               <li>
                  <a href="#0">Women</a>
               </li>
               <li>
                  <a href="#0">About</a>
               </li>
               <li>
                  <a href="#0">Contact</a>
               </li>
            </ul>
         </div>
      </StyledNavMenu>
   )
}