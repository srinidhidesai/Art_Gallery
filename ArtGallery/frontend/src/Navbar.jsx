// import React from 'react';
// import './App.css';

// function Navbar(){
//     return(
//     <div className='navBarWapper'>
//         <nav className='navBar'>
//         <a href='/Signup' className='links'>Signup</a>
//         <a href='/Paint' className='links'>Buy</a>
//         <a href='/Sell' className='links'>Sell</a>
//         <a href='/About-us' className='links'>Aboutus</a>
        
        
//         </nav>

//     </div>
//     )
// }
// export default Navbar;
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='navBarWapper'>
            <nav className='navBar'>
                <a href='/Signup' className='links'>Signup</a>
                <div className='dropdown' ref={dropdownRef}>
                    <a
                        className='links' 
                        onClick={toggleDropdown}
                    >
                        Buy
                    </a>
                    {isDropdownOpen && (
                        <ul className='dropdown-menu'>
                            <li><a href='/Paint' className='dropdown-link'>Paintings</a></li>
                            <li><a href='/Sculptures' className='dropdown-link'>Sculptures</a></li>
                            <li><a href='/Digitalart' className='dropdown-link'>Digital Art</a></li>
                        </ul>
                    )}
                </div>
                <a href='/Sell' className='links'>Sell</a>
                <a href='/About-us' className='links'>About Us</a>
                <a href='/Review' className='links'>Review Us</a>
                <a href='/Login' className='links'>Login</a>
            </nav>
        </div>
    );
}

export default Navbar;

