import React from 'react';

const SideBar = () => {
  return (
  <ul className="pt-menu pt-elevation-1 sidebar">
    <li>
      <a className="pt-menu-item pt-icon-people" tabindex="0">Share...</a>
    </li>
    <li>
      <a className="pt-menu-item pt-icon-circle-arrow-right" tabindex="0">Move...</a>
    </li>
    <li>
      <a className="pt-menu-item pt-icon-edit" tabindex="0">Rename</a>
    </li>
    <li className="pt-menu-divider"></li>
    <li>
      <a className="pt-menu-item pt-icon-trash pt-intent-danger" tabindex="0">Delete</a>
    </li>
  </ul>
  )
}

export default SideBar;
