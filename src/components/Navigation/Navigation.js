import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home Page
      </NavLink>
      <NavLink
        to={routes.songSearch}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Search soung
      </NavLink>
    </nav>
  );
}
