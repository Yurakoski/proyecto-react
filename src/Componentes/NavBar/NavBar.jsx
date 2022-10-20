import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ children }) => {

const categories = [
        {id: 0 , name: 'Smart Tv', route: "/category/tv"},
        {id: 1 , name: 'Smartphones', route: "/category/smartphone"},
        {id: 2 , name: "Notebooks", route: "/category/notebooks"},
        {id: 3 , name: "Consolas", route: "/category/consolas"}
    ]

    return(
        <header>
            <Link to='/'><div className="logo">LOGO</div></Link>
            <Link to='/'>{ children }</Link>
            <nav>
                {categories.map((category)=>{
                   return <NavLink key={ category.id } to={ category.route }>{ category.name }</NavLink>
                })}
            </nav>
            <Link to='/cart'><CartWidget/></Link>
        </header>
    )
}

export default NavBar;
