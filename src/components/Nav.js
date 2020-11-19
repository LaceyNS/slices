import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSlicemasters() {
  // 1. Wait for 2 seconds
  setTimeout(() => {
    console.log('Go to Slicemasters!!!');
    // 2. Change the page
    navigate('/slicemasters');
    // if we wanted to add it to the browser history, add { replace: true }
  }, 2000);
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <button type="button" onClick={goToSlicemasters}>
            {' '}
            Click me to see slicemasters after 2 seconds
          </button>
        </li>
      </ul>
    </nav>
  );
}
