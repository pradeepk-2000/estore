import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleUser,faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = ()=>{

    const placeholders = ['shoes', 'mobiles', 'shirts', 'sweaters', 'pants'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const placeholderRef = useRef();

    const handleChange = (e) => {
        setUserInput(e.target.value);
      };

      useEffect(() => {
        if (!userInput) {
            // console.log("interval starting");
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
            // console.log("interval running");
          }, 2000);
    
          return () => {
            clearInterval(interval);
            // console.log("interval canceled");
          };
        }
      }, [userInput]);

    useEffect(() => {
        const select = document.getElementById('dynamicSelect');
    
        function handleSelectChange(event) {
          const selectedOption = event.target.options[event.target.selectedIndex].text;
          const auxSelect = document.createElement('select');
          const option = document.createElement('option');
          option.text = selectedOption;
          auxSelect.appendChild(option);
    
          select.parentNode.insertBefore(auxSelect, select.nextSibling);
    
          select.style.width = auxSelect.offsetWidth + 'px';
    
          auxSelect.parentNode.removeChild(auxSelect);
        }
    
        select.addEventListener('change', handleSelectChange);
    
        select.dispatchEvent(new Event('change'));
    
        return () => {
          select.removeEventListener('change', handleSelectChange);
        };
      }, []);    

    return(
        <div className="header">
            <div className="navbar">
            <div className="navbar-header">
                <div className="welcome-title">
                <span className="welcome">eStore!</span>
                </div>
            </div>
                <div className="search-bar">
                    <div className="categories">
                    <select name="categories-select" id="dynamicSelect">
                        <option value="all">All</option>
                        <option value="clothes">Clothes</option>
                        <option value="electronics">Electronics</option>
                        <option value="shoes">Foot wear</option>
                        <option value="ingredients">Home ingredients</option>
                    </select>
                    </div>
                    <div className="search-input">
                        <input
                            type="text"
                            id="searchResults"
                            value={userInput}
                            onChange={handleChange}
                            placeholder={userInput ? userInput : placeholders[currentIndex]}
                            ref={placeholderRef}
                        />  
                      <span className="search-open"></span>
                    </div>
                    <div className="search-symbol">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white"}} size="lg"/>
                    </div>
                </div>
                <div className="navbar-collapse">
                    <ul>
                        <li><NavLink to="/estore" activeclassname="active-link">
                        <FontAwesomeIcon icon={faHouse} id="fonticon"  />Home
                        </NavLink></li>

                        <li><NavLink to="/estore/cart" activeclassname="active-link">
                        <FontAwesomeIcon icon={faCartShopping} id="fonticon" /> Cart
                        </NavLink></li>

                        <li><NavLink to="/estore/profile" activeclassname="active-link">
                        <FontAwesomeIcon icon={faCircleUser} id="fonticon" />Profile
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Header);
