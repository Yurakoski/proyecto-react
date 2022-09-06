import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return(
        <header>
            <div class="logo">LOGO</div>
            <h1>E-Commerce</h1>
            <nav>
                <a href="">Categoría 1</a>
                <a href="">Categoría 2</a>
                <a href="">Categoría 3</a>
            </nav>
            <ShoppingCartIcon/>

        </header>
    )
}

export default NavBar;
