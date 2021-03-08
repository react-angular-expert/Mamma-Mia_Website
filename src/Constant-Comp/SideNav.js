import React from 'react';
import MobileSocialTags from '../Global-Comp/MobileSocialTags';
import { Link } from 'react-router-dom';

export default function SideNav({ NavOpen, CloseNav }) {
  let SideNavClasses = 'SideNav';

  if (NavOpen) {
    SideNavClasses = 'SideNav SideNavOpen';
  }

  return (
    <div className={SideNavClasses} id='SideNav'>
      <div className='SideNav-InnerWrap' id='SideNav-InnerWrap'>
        <div className='ExitSideNav' onClick={CloseNav}>
          <div className='ExitSideNav-InnerWrap'>
            <div className='ExitSideNav-Bar' id='Bar1'></div>
            <div className='ExitSideNav-Bar' id='Bar2'></div>
          </div>
        </div>

        <Link to='/menu' onClick={CloseNav}>
          <h4 className='SideNav-Item' id='SideNav-Item'>
            Jelovnik
          </h4>
        </Link>

        <Link to='/booking' onClick={CloseNav}>
          <h4 className='SideNav-Item' id='SideNav-Item'>
            Rezervacije
          </h4>
        </Link>

        <Link to='/ourstory' onClick={CloseNav}>
          <h4 className='SideNav-Item' id='SideNav-Item'>
            O Nama
          </h4>
        </Link>

        <Link to='/experience' onClick={CloseNav}>
          <h4 className='SideNav-Item' id='SideNav-Item'>
            Ambijent
          </h4>
        </Link>

        <MobileSocialTags />

        <h4 className='SideNav-Email' id='SideNav-Email'>
          info@mammamia.rs
        </h4>
      </div>
    </div>
  );
}
