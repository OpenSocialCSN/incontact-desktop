import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

// TODO: set class to uk-active on current route

export default () => (
  <nav className="uk-navbar-container" uk-navbar="true">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link to={routes.HOME}>Contacts</Link>
        </li>
        <li>
          <Link to={routes.COUNTER}>Notifications</Link>
        </li>
        <li className="uk-parent">
          <Link to={routes.COUNTER}>Counter</Link>
        </li>
      </ul>
    </div>
  </nav>
);
