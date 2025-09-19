import React from 'react'
import './Header.css'

const Header = () => {
  const handleViewMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Savor the convenience of flavors from around the world — our menu brings together a vibrant selection of dishes, crafted with premium ingredients and delivered fresh to your doorstep.</p>
            <button onClick={handleViewMenu}>View Menu</button>
        </div>


      
    </div>
  )
}

export default Header
