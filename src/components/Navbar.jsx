import { links } from "../data";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {

const [active,setActive] = useState(1);
const [showMenu,  setShowMenu] = useState(false);


 const activeHandler = (id) => {
  setActive(id);
 }




  return (
  
    <nav className="nav">
      <div className={ showMenu? 'nav_menu show-menu' : 'nav_menu'}>
        <ul className="nav_list">
          {links.map(({ name, icon, path, id }) => {
            return (
              <li className="nav_item" key={id}>
                <HashLink
                  to={path}
                  smooth
                  onClick={ ()=> {activeHandler(id) ; setShowMenu(!showMenu) }}
                  className={ active === id? "nav_link active-nav" : "nav_link"
                  }
                  
                >
               
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </HashLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={ showMenu? 'nav_toggle animate-toggle' : 'nav_toggle'} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
