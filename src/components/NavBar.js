import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import { HomeIcon, ProjectsIcon, ContactIcon } from './icons/NavIcons'


export default function NavBar() {
  function toggleIsLinkActive({ isActive }) {
    return isActive ? `${css.NavLink} ${css.NavLinkActive}` : css.NavLink
  }

  return (
    <nav className={css.Nav}>
      <ul className={css.List}>
        <li className={css.ListItem}>
          <NavLink to='/' className={toggleIsLinkActive}>
            <HomeIcon />
          </NavLink>
        </li>
        <li className={css.ListItem}>
          <NavLink to='/projects' className={toggleIsLinkActive}>
            <ProjectsIcon />
          </NavLink>
        </li>
        <li className={css.ListItem}>
          <NavLink to='/contact' className={toggleIsLinkActive}>
            <ContactIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
