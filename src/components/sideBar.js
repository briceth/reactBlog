import React from 'react';
import { Link } from 'react-router';


const SideBar = () => {
  return (
    <div className='col-sm-2'>
      <ul className="pt-menu pt-elevation-1 sidebar">
        <li>
          <Link to='/post/new' className='pt-button pt-minimal pt-icon-add pt-intent-success'>Add a post</Link>
        </li>
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
    </div>
  )
}

export default SideBar;
