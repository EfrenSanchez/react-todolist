//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../gato.svg';

//Styles
import './header.css';

function Header() {
  return (
    <header>
      <div className="heading__top">
        <Link className="heading__link" to="/">Home</Link> | <Link className="heading__link" to="/about">About</Link>
      </div>
      <div className="heading__bottom">
        <Logo className="heading__logo" />
        <h1 className="heading__title">To-Do List</h1>
      </div>
    </header>
  )
}

export default Header;
