import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const BookLayout = () => {
  return (
    <>
      <ul>
        <li><Link to="/Books/1">Book 1</Link></li>
        <li><Link to="/Books/2">Book 2</Link></li>
      </ul>
      <Outlet context={{name: "MKM"}}/>
    </>
  )
}
