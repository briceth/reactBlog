import React from 'react';

const SideBar = () => {
  return (
  <ul className="pt-menu pt-elevation-1 sidebar">
    <li>
      <a className="pt-menu-item pt-icon-people" >Share...</a>
    </li>
    <li>
      <a className="pt-menu-item pt-icon-circle-arrow-right" >Move...</a>
    </li>
    <li>
      <a className="pt-menu-item pt-icon-edit" >Rename</a>
    </li>
    <li className="pt-menu-divider"></li>
    <li>
      <a className="pt-menu-item pt-icon-trash pt-intent-danger" >Delete</a>
    </li>
  </ul>
  )
}

export default SideBar;
