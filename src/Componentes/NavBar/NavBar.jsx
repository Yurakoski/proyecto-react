import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({children}) => {

const categories = [
        {id: 0 , name: 'Categoría 1'},
        {id: 1 , name: 'Categoría 2'},
        {id: 2 , name: 'Categoría 3'},
    ]

    return(
        <header>
            <div class="logo">LOGO</div>
            {children}
            <nav>
                {categories.map((category)=>{
                   return <a key={category.id} href="">{category.name}</a>
                })}
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;
