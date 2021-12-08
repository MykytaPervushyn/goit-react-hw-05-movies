import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Nav = () => (
    <nav >
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.inactive}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => isActive ? s.active : s.inactive}>Movies</NavLink>
        <hr/>
    </nav>
)

export default Nav;