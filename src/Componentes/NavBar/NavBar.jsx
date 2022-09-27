import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ children }) => {

const categories = [
        {id: 0 , name: 'electronics', route: "/category/electronics"},
        {id: 1 , name: 'jewelery', route: "/category/jewelery"},
        {id: 2 , name: "men's clothing", route: "/category/men's clothing"},
        {id: 3 , name: "women's clothing", route: "/category/women's clothing"}
    ]

    return(
        <header>
            <Link to='/'><div className="logo">LOGO</div></Link>
            <Link to='/'>{children}</Link>
            <nav>
                {categories.map((category)=>{
                   return <NavLink key={category.id} to={category.route}>{category.name}</NavLink>
                })}
            </nav>
            <Link to='/cart'><CartWidget/></Link>
        </header>
    )
}

export default NavBar;
