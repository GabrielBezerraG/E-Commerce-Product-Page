import { StyledNavMenu } from "./styles";

export default function NavMenu(props) {
   return (
      <StyledNavMenu>
         <div className={props.menuVisibility ? 'navmenu' : 'navmenu navmenu--hidden'}> 
            <button onClick={() => props.setMenuVisibility(!props.menuVisibility)} />
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